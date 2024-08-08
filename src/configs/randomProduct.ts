import { productInterface } from "@/app/components/ProductCard";
import { props } from "./data";

export const randomProduct = () => {
  // make 3 random numbers
  const products = props;

  // get 3 products randoms

  const randomProducts = Object.values(products)
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  return randomProducts;
};
