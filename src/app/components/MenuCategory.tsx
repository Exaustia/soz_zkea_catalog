"use client";

import { category } from "@/configs/category";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MenuCategory = () => {
  const container = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (!container.current) return;
    const scrollAmount = 200;
    if (direction === "left") {
      container.current.scrollLeft -= scrollAmount;
    } else {
      container.current.scrollLeft += scrollAmount;
    }
  };


  return (
    <div className="relative" id={"cat_ctn"}>
      <div className="overflow-auto flex gap-8 p-4" ref={container} style={{ scrollBehavior: "smooth" }}>
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 h-7 w-7 bg-gray-900 top-0 bottom-0 m-auto rounded-full opacity-0 flex items-center justify-center transition-all"
        >
          {"<"}
        </button>
        {category.map((item) => (
          <Link
            href={"/categories/" + item.slug}
            key={item.slug}
            className="flex flex-col justify-center items-center min-w-24 gap-4 cursor-pointer menu_category"
          >
            <Image src={item.image} alt="cat-img" width={80} height={80} />
            <span className="text-black text-sm text-center">{item.name}</span>
          </Link>
        ))}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 h-7 w-7 bg-gray-900 top-0 bottom-0 m-auto rounded-full opacity-0 flex items-center justify-center  transition-all"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
