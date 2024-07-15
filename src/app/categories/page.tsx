import Image from "next/image";
import { useRouter } from "next/router";

import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import CategoryCard from "../components/CategoryCard";
import { category } from "@/configs/category";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.slug;

  return {
    title: "product.title",
  };
}
export default function Category() {
  return (
    <DefaultLayout>
      <BreadCumb current={"Categories"} />
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
        {category.map((item) => (
          <CategoryCard categoryName={item.name} key={item.slug} />
        ))}
      </div>
    </DefaultLayout>
  );
}
