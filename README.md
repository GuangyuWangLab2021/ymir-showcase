# Ymir

[Open Ymir](https://guangyuwanglab2021.github.io/ymir-showcase/).

A static gallery of eight demonstrations across four cases, with lightweight playback and optional original-resolution videos.

- Edit `content/cases.js` to update titles and video paths.
- Put MP4 files in `media/case1/` through `media/case4/`, with optional cover images in `posters/`.
- Use H.264 / yuv420p with faststart for browser playback.
- The HD button loads a higher-resolution source only after a click; click again to return to standard quality. Playback position and pause state are retained.
- Every case uses the HD button. Case 1 retains its original 1120 × 600 source; other high-quality copies retain their original 1920-pixel width. No upscaling is applied.
- Seven high-quality files preserve the original videos exactly; the Non-responder video is re-encoded at its original 1920 × 1080 resolution to fit the repository file budget.
- This repository and its GitHub Pages website are public, as requested by the owner.
- GitHub Pages publishes the root of the `main` branch. No build dependencies are required.

The cardiac scale bars use model coordinates and the reconstruction's assumed 1.2 mm diameter; the experimental footage has no independent spatial calibration.
