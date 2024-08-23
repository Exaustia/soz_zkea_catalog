"use client";

import randomUuid from "@/utils/randomUuid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMenu } from "../context/MenuProvider";
import getUrl from "@/utils/url";
import { findSlug } from "@/utils/findType";
import classNames from "classnames";
import { useShop } from "../context/ShopProvider";
import c from "classnames";

/* eslint-disable @next/next/no-img-element */

export interface productInterface {
  type: string;
  name: string;
  model: string;
  price: number;
  collision: boolean;
}

const ProductCard = ({
  product,
  selected,
}: {
  product: productInterface;
  selected?: boolean;
}) => {
  const { toggleView } = useMenu();
  const { addShopItem, removeShopItem, shopItems } = useShop();
  const [isHover, setIsHover] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isShopItem = shopItems.find((item) => item.model === product.model);

  return (
    <div
      className={c(
        { "border-2 border-red-800 shadow-2xl": selected },
        "relative rounded-sm cursor-pointer overflow-hidden hover:shadow-2xl transition-all h-72"
      )}
    >
      <div className="relative w-full h-3/4">
        <button
          onClick={() => {
            isShopItem ? removeShopItem(product) : addShopItem(product);
          }}
          className="z-10 absolute top-2 right-2 p-1 bg-gray-500 text-xs bg-opacity-45 rounded-md text-white font-semibold"
        >
          {isShopItem ? "Retirer du panier -" : "Ajouter au panier +"}
        </button>
        <Image
          src={
            !imageError ? getUrl(product.model, "image") : "/images/noimage.jpg"
          }
          unoptimized
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="placeholder"
          className={
            "img_cat rounded-t-sm transition-all duration-500 w-full object-contain"
          }
          onError={() => setImageError(true)}
        />
        <div
          onClick={() => toggleView(product.model)}
          className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 bg-black"
        ></div>
      </div>

      <div className="p-4 flex gap-2 justify-between items-center h-1/4 bg-blackFrame opacity-75 cursor-default ">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">
            {product.name}
          </span>
          <span className="text-sm font-semibold text-secondary">
            {product.price}$
          </span>
        </div>
        <div className="flex flex-col relative cursor-pointer">
          <button
            data-tooltip-target="tooltip-default"
            type="button"
            className="text-sm font-semibold cursor-pointer"
            onMouseOver={() => {
              setIsHover(!isHover);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
          >
            {!product.collision && "⚠️"}
          </button>
          <div
            id="tooltip-default"
            role="tooltip"
            className={classNames(
              { hidden: !isHover },
              "absolute w-28 left-[-110px] top-[-30px] z-50 p-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg text-center"
            )}
          >
            Pas de collision
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// emoji waring :
