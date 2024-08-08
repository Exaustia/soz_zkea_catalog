"use client";
import DefaultLayout from "./layout/DefaultLayout";

import MenuCategory from "./components/MenuCategory";
import CarouselPage from "./components/Carousel";

import { useMenu } from "./context/MenuProvider";
import { randomProduct } from "@/configs/randomProduct";
import ProductCard, { productInterface } from "./components/ProductCard";
import { useEffect, useState } from "react";

export default function Home() {
  const { setPigeonOpen } = useMenu();
  const [products, setProducts] = useState<productInterface[]>();

  useEffect(() => {
    if (window.innerWidth < 1270) {
      setProducts(randomProduct().slice(0, 3));
    } else {
      setProducts(randomProduct());
    }
  }, []);

  useEffect(() => {
    // remove one product if screen is small

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1270) {
        setProducts((prev) => prev?.slice(0, 3));
      } else if (window.innerWidth > 1270) {
        if (products?.length === 3) {
          setProducts(randomProduct());
        }
      }
    });
  }, [products]);

  return (
    <main>
      <DefaultLayout>
        <section className="w-full">
          <MenuCategory />
        </section>
        <h2 className="text-start font-semibold text-3xl mt-14 text-black">
          Les Showrooms
        </h2>
        <section className="mt-4">
          <span className="text-black text-xs md:text-base">
            Bienvenue dans nos Showrooms, l&apos;endroit où les maisons simples
            deviennent extraordinaires ! Explorez nos espaces soigneusement
            aménagés pour découvrir des inspirations de décoration et
            d&apos;agencement. Chaque showroom est conçu pour vous donner un
            aperçu réaliste et chaleureux de ce à quoi pourrait ressembler votre
            future maison. Laissez-vous charmer par nos intérieurs accueillants,
            des cuisines fonctionnelles aux salons confortables. Entrez, faites
            comme chez vous, et laissez libre cours à vos rêves d&apos;habitat
            parfait. On parie que vous ne voudrez plus partir !
          </span>

          <div className="flex mt-8">
            <CarouselPage />
          </div>
        </section>
        <section className="w-full mt-14">
          <div className="w-full min-h-44 bg-[#1CCB2D] flex flex-col px-2 md:pl-8 justify-center gap-4">
            <span className="font-semibold text-2xl">
              Pour profiter de nos offres Zkea Family
            </span>
            <button
              className="bg-white text-black px-4 py-1 rounded-lg w-fit text-xs font-semibold"
              onClick={() => setPigeonOpen(true)}
            >
              Devenez membre ZKEA Family, c&apos;est rapide et ça ne coute que
              1999$!
            </button>
          </div>
        </section>
        <h2 className="text-start font-semibold text-3xl mt-14 text-black">
          En ce moment chez Zkea
        </h2>
        <section className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
          {products &&
            products.map((item) => (
              <ProductCard key={item.name} product={item} />
            ))}
        </section>
      </DefaultLayout>
    </main>
  );
}
