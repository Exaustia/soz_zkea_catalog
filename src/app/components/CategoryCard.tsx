"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
const CategoryCard = ({
  categoryName,
  slug,
  image,
}: {
  categoryName: string;
  slug: string;
  image: string;
}) => {
  useEffect(() => {
    // hover on div to scale image
    const div = document.querySelector(".card_cat_" + formatName(slug));
    const img_cat = document.querySelector(".img_cat_" + formatName(slug));

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
  }, [slug]);

  return (
    <Link
      href={"/categories/" + slug}
      className={"max-w-96 relative rounded-sm cursor-pointer overflow-hidden"}
    >
      <img
        src={image}
        alt="placeholder"
        className={
          "img_cat_" +
          formatName(slug) +
          " img_cat rounded-sm transition-all duration-500"
        }
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 bg-black"></div>
      <span
        className={
          "card_cat_" +
          formatName(slug) +
          " text-2xl md:text-4xl absolute  font-semibold justify-center items-center flex top-0 left-0 bottom-0 right-0 text-center"
        }
      >
        {categoryName}
      </span>
    </Link>
  );
};

export default CategoryCard;

const formatName = (name: string) => {
  return name.toLocaleLowerCase().replace(" ", "_").replace("/", "_");
};
