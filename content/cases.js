/* Simulation topics; legacy case anchors remain compatible. */
window.YMIR_CASES = [
  {
    "id": "case1",
    "number": 1,
    "navLabel": "Cardiac organoid simulation",
    "title": "Cardiac organoid simulation",
    "betweenPanelsHtml": "",
    "sections": [
      {
        "id": "s1",
        "title": "Video S1",
        "videoIds": [
          "case1_experiment_vs_simulation",
          "case1_calcium_normal_vs_withdrawal"
        ]
      }
    ],
    "videos": [
      {
        "id": "case1_experiment_vs_simulation",
        "columns": [
          "Experiment video",
          "Cardiac organoid simulation"
        ],
        "src": "media/case1/experiment-vs-trained.mp4",
        "poster": "posters/case1-experiment-vs-trained.jpg",
        "hdSrc": "media/hd/case1/experiment-vs-trained.mp4",
        "hdWidth": 1120,
        "hdHeight": 600,
        "width": 1120,
        "height": 600
      },
      {
        "id": "case1_calcium_normal_vs_withdrawal",
        "columns": [
          "Normal Ca²⁺",
          "Ca²⁺ withdrawal"
        ],
        "src": "media/case1/calcium-withdrawal.mp4",
        "poster": "posters/case1-calcium-withdrawal.jpg",
        "hdSrc": "media/hd/case1/calcium-withdrawal.mp4",
        "hdWidth": 1120,
        "hdHeight": 600,
        "width": 1120,
        "height": 600
      }
    ],
    "slug": "cardiac-organoid"
  },
  {
    "id": "case2",
    "number": 2,
    "navLabel": "Wound healing simulation",
    "title": "Wound healing simulation",
    "sections": [
      {
        "id": "s2",
        "title": "Video S2",
        "videoIds": [
          "normal_wound_healing"
        ]
      },
      {
        "id": "s3",
        "title": "Video S3",
        "videoIds": [
          "diabetic_pdgf_comparison"
        ]
      }
    ],
    "videos": [
      {
        "id": "normal_wound_healing",
        "src": "media/case2/normal-wound-healing.mp4",
        "poster": "posters/case2-normal-wound-healing.jpg",
        "hdSrc": "media/hd/case2/normal-wound-healing.mp4",
        "hdWidth": 1920,
        "hdHeight": 1766,
        "width": 1280,
        "height": 1178,
        "title": "Normal condition"
      },
      {
        "id": "diabetic_pdgf_comparison",
        "src": "media/case2/diabetic-pdgf.mp4",
        "poster": "posters/case2-diabetic-pdgf.jpg",
        "hdSrc": "media/hd/case2/diabetic-pdgf.mp4",
        "hdWidth": 1920,
        "hdHeight": 920,
        "width": 1280,
        "height": 614,
        "title": "Diabetic condition"
      }
    ],
    "slug": "wound-healing"
  },
  {
    "id": "case3",
    "number": 3,
    "navLabel": "Lung cancer progression simulation",
    "title": "Lung cancer progression simulation",
    "sections": [
      {
        "id": "s4",
        "title": "Video S4",
        "videoIds": [
          "case3_lung_cancer"
        ]
      }
    ],
    "videos": [
      {
        "id": "case3_lung_cancer",
        "src": "media/case3/lung-cancer-fields.mp4",
        "poster": "posters/case3-lung-cancer-fields.jpg",
        "hdSrc": "media/hd/case3/lung-cancer-fields.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      }
    ],
    "slug": "lung-cancer"
  },
  {
    "id": "case4",
    // Base colors in the patient movie renderer's CELL_TYPES palette.
    "cellTypes": [
      ["Tumor (lepidic)", "#bc80bd"],
      ["Tumor (invasive)", "#d62728"],
      ["Fibroblast", "#008a92"],
      ["CAF", "#02639a"],
      ["Macrophage M0", "#c49c94"],
      ["Macrophage M1", "#8c6d31"],
      ["Macrophage M2", "#8c564b"],
      ["CD8 T", "#b3de69"],
      ["CD4 T", "#2ca02c"],
      ["Treg", "#bcbd22"],
      ["Endothelial", "#fb8072"],
      ["Alveolar epithelium", "#bebada"]
    ],
    "number": 4,
    "navLabel": "Patient-specific treatment simulation",
    "title": "Patient-specific treatment simulation",
    "sections": [
      {
        "id": "s5",
        "title": "Video S5",
        "videoIds": [
          "case4_z56_surgery"
        ]
      },
      {
        "id": "s6",
        "title": "Video S6",
        "layout": "clinical",
        "videoIds": [
          "case4_z110_response",
          "case4_z137_response",
          "case4_z111_response",
          "case4_z44_nonresponse",
          "case4_z181_nonresponse",
          "case4_z194_nonresponse"
        ]
      }
    ],
    "videos": [
      {
        "id": "case4_z56_surgery",
        "src": "media/case4/z56-resection-180days.mp4",
        "poster": "posters/case4-z56-resection-180days.jpg",
        "hdSrc": "media/hd/case4/z56-resection-180days.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720,
        "title": "Surgery"
      },
      {
        "id": "case4_z110_response",
        "title": "Z110",
        "clinicalGroup": "R",
        "src": "media/case4/z110-response.mp4",
        "poster": "posters/case4-z110-response.jpg",
        "hdSrc": "media/hd/case4/z110-response.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      },
      {
        "id": "case4_z137_response",
        "title": "Z137",
        "clinicalGroup": "R",
        "src": "media/case4/z137-response.mp4",
        "poster": "posters/case4-z137-response.jpg",
        "hdSrc": "media/hd/case4/z137-response.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      },
      {
        "id": "case4_z111_response",
        "title": "Z111",
        "clinicalGroup": "R",
        "src": "media/case4/z111-response.mp4",
        "poster": "posters/case4-z111-response.jpg",
        "hdSrc": "media/hd/case4/z111-response.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      },
      {
        "id": "case4_z44_nonresponse",
        "title": "Z44",
        "clinicalGroup": "NR",
        "src": "media/case4/z44-nonresponse.mp4",
        "poster": "posters/case4-z44-nonresponse.jpg",
        "hdSrc": "media/hd/case4/z44-nonresponse.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      },
      {
        "id": "case4_z181_nonresponse",
        "title": "Z181",
        "clinicalGroup": "NR",
        "src": "media/case4/z181-nonresponse.mp4",
        "poster": "posters/case4-z181-nonresponse.jpg",
        "hdSrc": "media/hd/case4/z181-nonresponse.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      },
      {
        "id": "case4_z194_nonresponse",
        "title": "Z194",
        "clinicalGroup": "NR",
        "src": "media/case4/z194-nonresponse.mp4",
        "poster": "posters/case4-z194-nonresponse.jpg",
        "hdSrc": "media/hd/case4/z194-nonresponse.mp4",
        "hdWidth": 1920,
        "hdHeight": 1080,
        "width": 1280,
        "height": 720
      }
    ],
    "slug": "treatment"
  }
];
