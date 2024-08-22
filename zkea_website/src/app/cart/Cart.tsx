"use client";

import ProductCard from "../../components/ProductCard";
import { useShop } from "../../context/ShopProvider";

export const Cart = () => {
  const { shopItems } = useShop();

  const total = shopItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <div className="text-black flex w-full justify-end mt-8 font-semibold">
        <div className="justify-end flex flex-col">
          <p>Articles: {shopItems.length} </p>
          <p>Total: {total} $</p>
        </div>
      </div>
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 md:grid-cols-3 xl:grid-cols-4 m-auto">
        {shopItems.map((item) => (
          <ProductCard product={item} key={item.model} />
        ))}
      </div>
    </div>
  );
};
