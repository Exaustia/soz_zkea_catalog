"use client";

import randomUuid from "@/utils/randomUuid";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useMenu } from "../context/MenuProvider";

/* eslint-disable @next/next/no-img-element */

interface productInterface {
  type: string;
  name: string;
  model: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: productInterface }) => {
  const { toggleView } = useMenu();
  return (
    <div
      className={"relative rounded-sm cursor-pointer overflow-hidden bg-blackFrame   hover:shadow-2xl transition-all"}
    >
      <div className="relative">
        <img
          src={product.image}
          alt="placeholder"
          className={"img_cat rounded-t-sm transition-all duration-500 w-full"}
        />
        <div
          onClick={() => toggleView()}
          className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 bg-black"
        ></div>
      </div>

      <div className="p-4 flex gap-2 justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{product.name}</span>
          <span className="text-sm font-semibold text-secondary">{product.price}$</span>
        </div>
        <div className="flex flex-col">
          <button className="hover:scale-110 transition-all">
            <Image src="/images/icons/star.png" alt="heart" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
