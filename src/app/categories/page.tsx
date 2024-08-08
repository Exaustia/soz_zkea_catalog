import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import CategoryCard from "../components/CategoryCard";
import { category } from "@/configs/category";

export const metadata: Metadata = {
  title: "Soz - Catégories",
};

export default function Category() {
  return (
    <DefaultLayout>
      <BreadCumb current={"Categories"} />
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
        {category.map((item) => (
          <CategoryCard
            categoryName={item.name}
            key={item.slug}
            slug={item.slug}
            image={item.image}
          />
        ))}
      </div>
    </DefaultLayout>
  );
}
