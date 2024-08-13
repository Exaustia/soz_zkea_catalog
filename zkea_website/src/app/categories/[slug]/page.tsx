import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import ProductCard from "../../components/ProductCard";
import { category } from "@/configs/category";
import products from "@/configs/products";
import { findType } from "@/utils/findType";
import { Products } from "./Products";

type Props = {
  params: { slug: string };
};

export interface ProductI {
  type: string;
  name: string;
  model: string;
  price: number;
  collision: boolean;
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const currentCategory = category.find((item) => item.slug === params.slug);

  return {
    title: "Soz - " + currentCategory?.name,
  };
}
export default function Category({ params }: { params: { slug: string } }) {
  const cat = findType(params.slug);

  const productsFind = Object.values(products).filter(
    (product) => product.type === cat
  ) as ProductI[];

  const currentCategory = category.find((item) => item.slug === params.slug);
  if (!currentCategory) return null;

  return <Products products={productsFind} currentCategory={currentCategory} />;
}
