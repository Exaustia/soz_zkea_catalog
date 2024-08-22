import { productInterface } from "@/components/ProductCard";
import { products } from "@/configs/products";

export const searchProductByString = (search: string): productInterface[] => {
  const findProduct = Object.values(products).filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  }) as productInterface[];
  return findProduct;
};
