"use client";
import dynamic from "next/dynamic";
import { useMenu } from "../context/MenuProvider";

const ModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

const ViewModal = () => {
  const { toggleView } = useMenu();
  if (typeof window === "undefined") return null;
  return (
    <div className="z-20 m-auto left-0 right-0 top-0 bottom-0 w-[90vw] md:w-[50vw] md:h-[50vh] h-[90vh] max-w-screen-small flex justify-center items-center bg-white fixed">
      <button
        className="absolute top-3 right-3 menu-button justify-center items-center rounded-full w-12 h-12 border border-gray-600 flex hover:scale-125 transition-all"
        onClick={() => toggleView()}
      >
        <svg
          role="presentation"
          strokeWidth="2"
          focusable="false"
          width="19"
          height="19"
          className="icon icon-close"
          viewBox="0 0 24 24"
        >
          <path d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343" stroke="black"></path>
        </svg>
      </button>
      <ModelViewer />
    </div>
  );
};

export default ViewModal;
