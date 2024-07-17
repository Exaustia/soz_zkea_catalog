"use client";

import "@google/model-viewer/dist/model-viewer";

const ModelViewer = () => {
  if (typeof window === "undefined") return null;
  return (
    <div>
      <model-viewer
        src="/sm_22_pp_banner.glb"
        ios-src=""
        alt="3D model"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
