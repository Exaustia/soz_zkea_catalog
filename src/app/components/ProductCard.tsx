"use client";

import randomUuid from "@/utils/randomUuid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMenu } from "../context/MenuProvider";
import getUrl from "@/utils/url";
import { findSlug } from "@/utils/findType";

/* eslint-disable @next/next/no-img-element */

interface productInterface {
  type: string;
  name: string;
  model: string;
  price: number;
  collision: boolean;
}

const ProductCard = ({ product }: { product: productInterface }) => {
  const { toggleView } = useMenu();
  const [imageError, setImageError] = useState(false);

  const slug = findSlug(product.type);
  return (
    <div
      className={
        "relative rounded-sm cursor-pointer overflow-hidden hover:shadow-2xl transition-all h-72"
      }
    >
      <div className="relative w-full h-3/4">
        <Image
          src={
            !imageError
              ? getUrl(product.model, "image")
              : "/images/" + slug + ".jpeg"
          }
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="placeholder"
          className={"img_cat rounded-t-sm transition-all duration-500 w-full"}
          onError={() => setImageError(true)}
        />
        <div
          onClick={() => toggleView(product.model)}
          className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 bg-black"
        ></div>
      </div>

      <div className="p-4 flex gap-2 justify-between items-center h-1/4 bg-blackFrame ">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">{product.name}</span>
          <span className="text-sm font-semibold text-secondary">
            {product.price}$
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">
            {product.collision && "⚠️"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// emoji waring :
