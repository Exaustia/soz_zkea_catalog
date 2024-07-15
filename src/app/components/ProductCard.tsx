"use client";

import randomUuid from "@/utils/randomUuid";
import Link from "next/link";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */

interface productInterface {
  type: string;
  name: string;
  model: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: productInterface }) => {
  return (
    <Link
      href={"/products/" + product.model}
      className={
        "relative rounded-lg cursor-pointer overflow-hidden bg-blackFrame shadow-modal hover:scale-105 transition-all"
      }
    >
      <img
        src={product.image}
        alt="placeholder"
        className={"img_cat rounded-t-lg transition-all duration-500 w-full"}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 bg-black"></div>
      <div className="p-4 flex flex-col gap-2">
        <span className="text-sm font-semibold">{product.name}</span>
        <span className="text-sm font-semibold text-secondary">{product.price}$</span>
      </div>
    </Link>
  );
};

export default ProductCard;
