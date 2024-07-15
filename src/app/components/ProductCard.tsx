"use client";

import randomUuid from "@/utils/randomUuid";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
const ProductCard = ({}) => {
  return (
    <div
      className={
        "relative rounded-lg cursor-pointer overflow-hidden bg-blackFrame shadow-modal hover:scale-105 transition-all"
      }
    >
      <img
        src="https://www.ikea.com/fr/fr/images/products/ramnefjaell-cadre-de-lit-matelasse-kilanda-beige-clair-luroey__1258175_pe927363_s5.jpg?f=xl"
        alt="placeholder"
        className={"img_cat rounded-t-lg transition-all duration-500 w-full"}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 bg-black"></div>
      <div className="p-4 flex flex-col gap-2">
        <span className="text-sm font-semibold">lit 1 place</span>
        <span className="text-sm font-semibold text-secondary">36$</span>
      </div>
    </div>
  );
};

export default ProductCard;
