(() => {
  "use strict";
  const cases = window.YMIR_CASES || [];
  const navigation = document.querySelector("#case-nav");
  const content = document.querySelector("#case-content");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const autoPlay = !reduceMotion && !navigator.connection?.saveData;
  const userPaused = new WeakSet();
  const automaticPause = new WeakSet();
  const visibleVideos = new Set();
  const qualitySwitches = new WeakMap();
  let observer;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function pauseAutomatically(video) {
    if (!video.paused) {
      automaticPause.add(video);
      video.pause();
    }
  }

  function playAutomatically(video) {
    if (autoPlay && !document.hidden && !userPaused.has(video) && !qualitySwitches.has(video)) video.play().catch(() => {});
  }

  function mediaEvent(video, name, signal) {
    return new Promise((resolve, reject) => {
      const finish = (error) => {
        clearTimeout(timer);
        video.removeEventListener(name, ready);
        video.removeEventListener("error", failed);
        signal.removeEventListener("abort", cancelled);
        if (error) reject(error); else resolve();
      };
      const ready = () => finish();
      const failed = () => finish(new Error("Video could not load"));
      const cancelled = () => finish(new DOMException("Cancelled", "AbortError"));
      const timer = setTimeout(() => finish(new Error("Video load timed out")), 20000);
      video.addEventListener(name, ready, { once: true });
      video.addEventListener("error", failed, { once: true });
      signal.addEventListener("abort", cancelled, { once: true });
      if (signal.aborted) cancelled();
    });
  }

  for (const item of cases) {
    const link = el("a", "case-link", "Case " + item.number);
    link.href = "#" + item.id;
    link.dataset.case = item.id;
    navigation.append(link);
  }

  function render() {
    const current = cases.find(item => item.id === location.hash.slice(1).toLowerCase()) || cases[0];
    if (!current) return;
    if (observer) observer.disconnect();
    visibleVideos.clear();
    for (const video of content.querySelectorAll("video")) {
      qualitySwitches.get(video)?.abort();
      pauseAutomatically(video);
      video.removeAttribute("src");
      video.load();
    }
    content.replaceChildren();
    document.title = "Ymir · " + (current.title || "Case " + current.number);
    document.querySelectorAll(".case-link").forEach(link => {
      if (link.dataset.case === current.id) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    const view = el("div", "case-view " + current.id);
    view.dataset.case = current.id;
    view.append(el("h1", current.title ? "case-title" : "sr-only", current.title || "Case " + current.number));

    current.videos.forEach((film, index) => {
      const section = el("section", "video-section");
      section.dataset.video = film.id || "video-" + (index + 1);
      if (film.title) section.append(el("h2", "video-heading", film.title));
      if (film.columns?.length) {
        const labels = el("div", "column-labels");
        film.columns.forEach(label => labels.append(el("span", "", label)));
        section.append(labels);
      }
      const frame = el("div", "video-frame");
      const video = document.createElement("video");
      video.controls = true;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
      video.preload = index === 0 ? "metadata" : "none";
      video.autoplay = index === 0 && autoPlay;
      video.setAttribute("playsinline", "");
      video.setAttribute("aria-label", film.title || film.columns?.join(" and ") || "Case " + current.number);
      video.dataset.source = film.src;
      video.dataset.quality = "standard";
      if (film.width && film.height) {
        video.width = film.width;
        video.height = film.height;
      }
      if (film.poster) video.poster = film.poster;
      video.src = film.src;
      video.addEventListener("play", () => userPaused.delete(video));
      video.addEventListener("pause", () => {
        if (qualitySwitches.has(video)) automaticPause.delete(video);
        else if (automaticPause.has(video)) automaticPause.delete(video);
        else if (!video.ended) userPaused.add(video);
      });
      const showRetry = () => {
        if (frame.querySelector(".retry")) return;
        const retry = el("button", "retry", "↻");
        retry.type = "button";
        retry.setAttribute("aria-label", "Retry video");
        retry.addEventListener("click", () => { video.load(); video.play().catch(() => {}); });
        frame.append(retry);
      };
      video.addEventListener("error", () => {
        if (!qualitySwitches.has(video)) showRetry();
      });
      video.addEventListener("loadeddata", () => frame.querySelector(".retry")?.remove());
      frame.append(video);
      section.append(frame);
      if (film.hdSrc) {
        const controls = el("div", "video-quality");
        const label = film.hdLabel || "HD";
        const button = el("button", "quality-button", label);
        button.type = "button";
        const status = el("span", "sr-only");
        status.setAttribute("role", "status");
        let highQuality = false;
        const updateButton = () => {
          button.setAttribute("aria-pressed", String(highQuality));
          button.setAttribute("aria-label", highQuality ? "Switch to standard quality" : "Switch to " + label + " quality");
          button.title = highQuality ? "Return to standard quality" : label + " · " + film.hdWidth + " × " + film.hdHeight;
        };
        updateButton();
        button.addEventListener("click", async () => {
          const controller = new AbortController();
          const { signal } = controller;
          const resume = { time: video.currentTime || 0, playing: !video.paused, rate: video.playbackRate };
          const nextHigh = !highQuality;
          qualitySwitches.set(video, controller);
          button.disabled = true;
          button.setAttribute("aria-busy", "true");
          pauseAutomatically(video);
          video.autoplay = false;
          video.preload = "auto";
          const load = async (source) => {
            const metadata = mediaEvent(video, "loadedmetadata", signal);
            video.src = source;
            video.load();
            await metadata;
            const target = Math.min(resume.time, Math.max(0, video.duration - .05));
            if (Math.abs(video.currentTime - target) > .03) {
              const seek = mediaEvent(video, "seeked", signal);
              video.currentTime = target;
              await seek;
            }
            if (video.readyState < 2) await mediaEvent(video, "loadeddata", signal);
          };
          try {
            await load(nextHigh ? film.hdSrc : film.src);
            highQuality = nextHigh;
            video.dataset.source = highQuality ? film.hdSrc : film.src;
            video.dataset.quality = highQuality ? "hd" : "standard";
            status.textContent = highQuality ? label + " quality ready" : "Standard quality ready";
          } catch (error) {
            if (signal.aborted || !video.isConnected) return;
            try {
              await load(film.src);
              highQuality = false;
              video.dataset.source = film.src;
              video.dataset.quality = "standard";
              status.textContent = label + " unavailable; standard quality restored";
            } catch {
              if (!signal.aborted) showRetry();
            }
          } finally {
            if (qualitySwitches.get(video) === controller) qualitySwitches.delete(video);
            automaticPause.delete(video);
            if (!signal.aborted && video.isConnected) {
              video.playbackRate = resume.rate;
              if (resume.playing) {
                userPaused.delete(video);
                if (!document.hidden && visibleVideos.has(video)) video.play().catch(() => {});
              } else userPaused.add(video);
              button.disabled = false;
              button.removeAttribute("aria-busy");
              updateButton();
            }
          }
        });
        controls.append(status, button);
        section.append(controls);
      }
      view.append(section);
      if (current.id === "case1" && index === 0) {
        const slot = el("div", "between-panels");
        slot.dataset.slot = "case1-between-panels";
        if (current.betweenPanelsHtml) slot.innerHTML = current.betweenPanelsHtml;
        view.append(slot);
      }
    });

    if (!current.videos.length) {
      const empty = el("div", "empty-case");
      empty.setAttribute("aria-label", "Case " + current.number + " videos pending");
      empty.innerHTML = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M3 3h26v26H3zM13 10l9 6-9 6z"/></svg>';
      view.append(empty);
    }
    content.append(view);
    window.scrollTo({ top: 0, behavior: "instant" });
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= .5) {
            visibleVideos.add(video);
            playAutomatically(video);
          } else {
            visibleVideos.delete(video);
            pauseAutomatically(video);
          }
        });
      }, { threshold: [0, .5] });
      view.querySelectorAll("video").forEach(video => observer.observe(video));
    }
    const first = view.querySelector("video[autoplay]");
    if (first) playAutomatically(first);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) content.querySelectorAll("video").forEach(pauseAutomatically);
    else visibleVideos.forEach(playAutomatically);
  });
  window.addEventListener("hashchange", () => { if (location.hash !== "#main") render(); });
  render();
})();
