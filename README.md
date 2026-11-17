# Ymir

[Open Ymir](https://guangyuwanglab2021.github.io/ymir-showcase/).

A static video gallery with lightweight playback and optional original-resolution videos.

| Simulation | Supplementary videos |
| --- | --- |
| Cardiac organoid simulation | Video S1 |
| Wound healing simulation | Video S2, Video S3 |
| Lung cancer progression simulation | Video S4 |
| Patient-specific treatment simulation | Video S5, Video S6 |

Video S4 shows the replacement day 0–540 simulation with tissue and nine molecular panels. Video S5 shows Z56 resection through day 180. Video S6 includes responders Z110, Z137 and Z111, and non-responders Z44, Z181 and Z194.

- Edit `content/cases.js` to update the gallery. Existing panel and condition labels are retained; supplementary headings use Video S1–S6.
- Put H.264 / yuv420p / faststart MP4 files in `media/`, with optional cover images in `posters/`.
- Only the active simulation creates players. The first video starts muted; offscreen videos pause. Reduced-motion and data-saving preferences disable autoplay.
- Every quality button is labeled HD. Higher-quality sources load only after a click; click again to return to standard. Playback position and pause state are retained.
- Cardiac videos retain their original 1120 × 600 source; other high-quality videos retain their original 1920-pixel width. No upscaling is applied.
- The patient videos have visible physical scale bars after the H&E introduction. Selected high-quality copies are encoded at native resolution to fit the repository file budget.
- This repository and its GitHub Pages website are public, as requested by the owner.
- GitHub Pages publishes the root of the `main` branch. No build dependencies are required.

The cardiac scale bars use model coordinates and the reconstruction's assumed 1.2 mm diameter; the experimental footage has no independent spatial calibration.
