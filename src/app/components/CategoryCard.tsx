"use client";

import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const CategoryCard = ({ categoryName }: { categoryName: string }) => {
  useEffect(() => {
    // hover on div to scale image
    const div = document.querySelector(".card_cat_" + formatName(categoryName));
    const img_cat = document.querySelector(".img_cat_" + formatName(categoryName));

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
  }, [categoryName]);

  console.log("img_cat_" + formatName(categoryName))

  return (
    <div className={"max-w-96 relative rounded-lg cursor-pointer overflow-hidden"}>
      <img
        src="https://www.ikea.com/fr/fr/images/products/ramnefjaell-cadre-de-lit-matelasse-kilanda-beige-clair-luroey__1258175_pe927363_s5.jpg?f=xl"
        alt="placeholder"
        className={"img_cat_" + formatName(categoryName) + " img_cat rounded-lg transition-all duration-500"}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 bg-black"></div>
      <span
        className={
          "card_cat_" +
          formatName(categoryName) +
          " text-2xl md:text-4xl absolute  font-semibold justify-center items-center flex top-0 left-0 bottom-0 right-0 text-center"
        }
      >
        {categoryName}
      </span>
    </div>
  );
};

export default CategoryCard;

const formatName = (name: string) => {
  return name.toLocaleLowerCase().replace(" ", "_").replace("/", "_");
};
