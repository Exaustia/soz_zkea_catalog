"use client";

import { useMenu } from "../../context/MenuProvider";

const FamilyModal = () => {
  const { setFamilyOpen } = useMenu();
  if (typeof window === "undefined") return null;
  return (
    <div className="text-black z-20 m-auto left-0 right-0 top-0 bottom-0 w-[90vw] md:w-[50vw] md:h-[50vh] h-[90vh] max-w-screen-small flex justify-center items-center bg-white fixed">
      <button
        className="z-50 absolute top-3 right-3 menu-button justify-center items-center rounded-full w-12 h-12 border border-gray-600 flex hover:scale-125 transition-all"
        onClick={() => setFamilyOpen(false)}
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
          <path
            d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343"
            stroke="black"
          ></path>
        </svg>
      </button>
      <div className="p-4 text-center">
        <span>
          Envoyez le montant indiqué (1999$), à l&apos;adresse
          suivante: <b>648Z9403T693</b>
        </span>
      </div>
    </div>
  );
};

export default FamilyModal;
