/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import DefaultLayout from "./layout/DefaultLayout";
import CategoryCard from "./components/CategoryCard";
import Showroom from "./showroom/page";
import ShowroomCard from "./components/ShowroomCard";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

import bestsellers from "@/configs/bestSellers";
import MenuCategory from "./components/MenuCategory";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <section className="w-full">
          <MenuCategory />
        </section>
        <h2 className="text-start font-semibold text-3xl mt-14 text-black">Les Showrooms</h2>
        <section className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 m-auto">
          <ShowroomCard />
          <ShowroomCard />
        </section>
        <h2 className="text-start font-semibold text-3xl mt-14 text-black">Les BestSeller</h2>
        <section className="grid grid-cols-2 small:grid-cols-3 mt-8 gap-8 sm:grid-cols-5 m-auto">
          {bestsellers.map((item) => (
            <ProductCard key={item.name} product={item} />
          ))}
        </section>
      </DefaultLayout>
    </main>
  );
}
