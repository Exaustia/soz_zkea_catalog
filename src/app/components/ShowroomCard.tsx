"use client";

import randomUuid from "@/utils/randomUuid";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
const ShowroomCard = ({}) => {
  const uuid = randomUuid();

  useEffect(() => {
    // hover on div to scale image
    const div = document.querySelector(".card_cat_" + uuid);
    const img_cat = document.querySelector(".img_cat_" + uuid);

    const handleMouseEnter = () => {
      img_cat?.classList.add("scale-110");
    };

    const handleMouseLeave = () => {
      img_cat?.classList.remove("scale-110");
    };

    div?.addEventListener("mouseenter", handleMouseEnter);
    div?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      div?.removeEventListener("mouseenter", handleMouseEnter);
      div?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={
        "relative rounded-lg cursor-pointer overflow-hidden bg-blackFrame shadow-modal hover:scale-105 transition-all"
      }
    >
      <img
        src="https://www.ikea.com/fr/fr/images/products/ramnefjaell-cadre-de-lit-matelasse-kilanda-beige-clair-luroey__1258175_pe927363_s5.jpg?f=xl"
        alt="placeholder"
        className={"img_cat_" + uuid + " img_cat rounded-t-lg transition-all duration-500 w-full"}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 bg-black"></div>
    </div>
  );
};

export default ShowroomCard;
