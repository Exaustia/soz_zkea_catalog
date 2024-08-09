import { productInterface } from "@/app/components/ProductCard";
import { props } from "@/configs/data";

export const searchProductByString = (search: string): productInterface[] => {
  const findProduct = Object.values(props).filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  return findProduct;
};
