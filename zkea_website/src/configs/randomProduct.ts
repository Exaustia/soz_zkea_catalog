import { productInterface } from "@/components/ProductCard";
import { products } from "./products";

export const randomProduct = (): productInterface[] => {
  const randomProducts = Object.values(products)
    .sort(() => Math.random() - Math.random())
    .slice(0, 4)
    .map((product) => ({
      ...product,
      price: product.price || 0, // Set price to 0 if it's null
    }));

  return randomProducts;
};
