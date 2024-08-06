"use client";

import getUrl from "@/utils/url";
import "@google/model-viewer/dist/model-viewer";

const ModelViewer = (elm) => {
  if (typeof window === "undefined") return null;
  return (
      <model-viewer
        class="w-full h-full"
        src={getUrl(elm.elm, 'glb')}
        ios-src=""
        alt="3D model"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
  );
};

export default ModelViewer;
