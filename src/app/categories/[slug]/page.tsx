import Image from "next/image";
import { useRouter } from "next/router";

import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import Card from "../../components/ProductCard";
import ProductCard from "../../components/ProductCard";
import { category } from "@/configs/category";
import products from "@/configs/products";
import { findType } from "@/utils/findType";

type Props = {
  params: { slug: string };
};

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
  );

  const currentCategory = category.find((item) => item.slug === params.slug);
  if (!currentCategory) return null;

  return (
    <DefaultLayout>
      <BreadCumb
        routing={[{ name: "Categories", path: "/categories" }]}
        current={currentCategory?.name}
      />
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
        {productsFind.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
        {productsFind.length === 0 && (
          <div className="text-start text-black">Aucun produit trouvé</div>
        )}
      </div>
    </DefaultLayout>
  );
}
