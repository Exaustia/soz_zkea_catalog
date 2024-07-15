/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";

import type { Metadata, ResolvingMetadata } from "next";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import { category } from "@/configs/category";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.slug;

  return {
    title: "Soz - " + id,
  };
}
export default function Product({ params }: { params: { slug: string } }) {
  const product = {
    type: "beds",
    name: "La chambre à toto",
    model: "xxx_tata",
    price: 50,
  };

  const path = category.find((item) => item.slug === product.type);
  if (path === undefined) {
    return (
      <DefaultLayout>
        <BreadCumb routing={[{ name: "Categories", path: "/categories" }]} current={params.slug} />
        <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
          <p>Product not found</p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <BreadCumb
        routing={[
          { name: "Categories", path: "/categories" },
          { name: path.name, path: "/categories/" + path.slug },
        ]}
        current={params.slug}
      />
      <section className="mt-12 flex flex-col md:flex-row gap-8">
        <div className="flex md:w-1/2">
          <img
            src="https://via.placeholder.com/800x800"
            alt="banner"
            className="logo object-cover scale-100 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-center md:items-start  md:w-1/2">
          <h1 className="text-4xl font-bold text-center md:text-left">Product name</h1>
          <p className="text-lg text-center md:text-left mt-4">Product description</p>
          <div className="mt-4 w-full">
            <button className="bg-primary text-white rounded-md bg-[#217D56] p-4 w-full max-w-96">
              Ajouté aux favoris
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
