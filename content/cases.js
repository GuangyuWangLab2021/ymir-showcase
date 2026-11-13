/* Add Case 3 MP4 entries to its videos array; paths are relative to index.html.
   Optional HTML between the Case 1 panels goes in betweenPanelsHtml. */
window.YMIR_CASES = [
  {
    id: "case1", number: 1, title: "Cardiac organoid", betweenPanelsHtml: "",
    videos: [
      { id: "case1_experiment_vs_simulation",
        columns: ["Experiment video", "Cardiac organoid simulation"],
        src: "media/case1/experiment-vs-trained.mp4", poster: "posters/case1-experiment-vs-trained.jpg",
        width: 1120, height: 600 },
      { id: "case1_calcium_normal_vs_withdrawal",
        columns: ["Normal Ca²⁺", "Ca²⁺ withdrawal"],
        src: "media/case1/calcium-withdrawal.mp4", poster: "posters/case1-calcium-withdrawal.jpg",
        width: 1120, height: 600 }
    ]
  },
  {
    id: "case2", number: 2, title: "",
    videos: [
      { id: "normal_wound_healing", title: "Normal condition",
        src: "media/case2/normal-wound-healing.mp4", poster: "posters/case2-normal-wound-healing.jpg",
        width: 1280, height: 1178 },
      { id: "diabetic_pdgf_comparison", title: "Diabetic condition",
        src: "media/case2/diabetic-pdgf.mp4", poster: "posters/case2-diabetic-pdgf.jpg",
        width: 1280, height: 614 }
    ]
  },
  {
    id: "case3", number: 3, title: "Lung cancer",
    videos: [
      { id: "case3_lung_cancer",
        src: "media/case3/lung-cancer.mp4", poster: "posters/case3-lung-cancer.jpg",
        width: 1280, height: 720 }
    ]
  },
  {
    id: "case4", number: 4, title: "",
    videos: [
      { id: "case4_z56_surgery", title: "Surgery",
        src: "media/case4/z56-resection-180days.mp4", poster: "posters/case4-z56-resection-180days.jpg",
        width: 1280, height: 720 },
      { id: "case4_z110_response", title: "Response",
        src: "media/case4/z110-response.mp4", poster: "posters/case4-z110-response.jpg",
        width: 1280, height: 720 },
      { id: "case4_z44_nonresponse", title: "Non-response",
        src: "media/case4/z44-nonresponse.mp4", poster: "posters/case4-z44-nonresponse.jpg",
        width: 1280, height: 720 }
    ]
  }
];
