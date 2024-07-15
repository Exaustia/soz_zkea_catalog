/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import DefaultLayout from "./layout/DefaultLayout";
import CategoryCard from "./components/CategoryCard";
import Showroom from "./showroom/page";
import ShowroomCard from "./components/ShowroomCard";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { category } from "@/configs/category";
import bestsellers from "@/configs/BestSellers";
// default image full screen size = 1920x1080
// const url  = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

export default function Home() {
  return (
    <main>
      <img
        src="https://via.placeholder.com/2200x800"
        alt="banner"
        className="logo w-full h-full object-cover scale-100 "
      />
      <DefaultLayout>
        <h2 className="text-center font-semibold text-3xl mt-4">Les catégories</h2>
        <section className="grid grid-cols-2 small:grid-cols-3 mt-8 gap-8 sm:grid-cols-4 xl:grid-cols-5 m-auto">
          {category.splice(0, 5).map((item) => (
            <Link href={"/category/" + item.slug} key={item.slug}>
              <CategoryCard categoryName={item.name} />
            </Link>
          ))}
        </section>
        <h2 className="text-center font-semibold text-3xl mt-14">Les Showrooms</h2>
        <section className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 m-auto">
          <ShowroomCard />
          <ShowroomCard />
        </section>
        <h2 className="text-center font-semibold text-3xl mt-14">Les BestSeller</h2>
        <section className="grid grid-cols-2 small:grid-cols-3 mt-8 gap-8 sm:grid-cols-5 m-auto">
          {bestsellers.map((item) => (
            <ProductCard key={item.slug} />
          ))}
        </section>
      </DefaultLayout>
    </main>
  );
}
