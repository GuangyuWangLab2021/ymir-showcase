/* Add Case 3 MP4 entries to its videos array; paths are relative to index.html.
   Optional HTML between the Case 1 panels goes in betweenPanelsHtml. */
window.YMIR_CASES = [
  {
    id: "case1", number: 1, title: "Case 1", betweenPanelsHtml: "",
    videos: [
      { id: "case1_experiment_vs_simulation",
        columns: ["Experiment video", "Cardiac organoid simulation"],
        src: "media/case1/experiment-vs-trained.mp4", poster: "posters/case1-experiment-vs-trained.jpg",
        hdSrc: "media/hd/case1/experiment-vs-trained.mp4", hdWidth: 1120, hdHeight: 600,
        width: 1120, height: 600 },
      { id: "case1_calcium_normal_vs_withdrawal",
        columns: ["Normal Ca²⁺", "Ca²⁺ withdrawal"],
        src: "media/case1/calcium-withdrawal.mp4", poster: "posters/case1-calcium-withdrawal.jpg",
        hdSrc: "media/hd/case1/calcium-withdrawal.mp4", hdWidth: 1120, hdHeight: 600,
        width: 1120, height: 600 }
    ]
  },
  {
    id: "case2", number: 2, title: "Case 2",
    videos: [
      { id: "normal_wound_healing", title: "Normal condition",
        src: "media/case2/normal-wound-healing.mp4", poster: "posters/case2-normal-wound-healing.jpg",
        hdSrc: "media/hd/case2/normal-wound-healing.mp4", hdWidth: 1920, hdHeight: 1766,
        width: 1280, height: 1178 },
      { id: "diabetic_pdgf_comparison", title: "Diabetic condition",
        src: "media/case2/diabetic-pdgf.mp4", poster: "posters/case2-diabetic-pdgf.jpg",
        hdSrc: "media/hd/case2/diabetic-pdgf.mp4", hdWidth: 1920, hdHeight: 920,
        width: 1280, height: 614 }
    ]
  },
  {
    id: "case3", number: 3, title: "Case 3",
    videos: [
      { id: "case3_lung_cancer",
        src: "media/case3/lung-cancer.mp4", poster: "posters/case3-lung-cancer.jpg",
        hdSrc: "media/hd/case3/lung-cancer.mp4", hdWidth: 1920, hdHeight: 1080,
        width: 1280, height: 720 }
    ]
  },
  {
    id: "case4", number: 4, title: "Case 4",
    videos: [
      { id: "case4_z56_surgery", title: "Surgery",
        src: "media/case4/z56-resection-180days.mp4", poster: "posters/case4-z56-resection-180days.jpg",
        hdSrc: "media/hd/case4/z56-resection-180days.mp4", hdWidth: 1920, hdHeight: 1080,
        width: 1280, height: 720 },
      { id: "case4_z110_response", title: "Responder",
        src: "media/case4/z110-response.mp4", poster: "posters/case4-z110-response.jpg",
        hdSrc: "media/hd/case4/z110-response.mp4", hdWidth: 1920, hdHeight: 1080,
        width: 1280, height: 720 },
      { id: "case4_z44_nonresponse", title: "Non-responder",
        src: "media/case4/z44-nonresponse.mp4", poster: "posters/case4-z44-nonresponse.jpg",
        hdSrc: "media/hd/case4/z44-nonresponse.mp4", hdWidth: 1920, hdHeight: 1080,
        width: 1280, height: 720 }
    ]
  }
];
