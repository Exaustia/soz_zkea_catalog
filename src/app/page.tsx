"use client";
import DefaultLayout from "./layout/DefaultLayout";

import MenuCategory from "./components/MenuCategory";
import CarouselPage from "./components/Carousel";
import BasicCard from "./components/BasicCard";
import { useMenu } from "./context/MenuProvider";

const cards = [
  {
    color: "bg-green-600",
    title: "Un titre de fou",
    description: "Une promotion de fou mais qui ne fonctionne pas!",
  },
  {
    color: "bg-[#CC0008]",
    title: "Un titre de fou",
    description: "Une promotion de fou mais qui ne fonctionne pas!",
  },
  {
    color: "bg-blue-600",
    title: "Un titre de fou",
    description: "Une promotion de fou mais qui ne fonctionne pas!",
  },
];

export default function Home() {
  const { setPigeonOpen } = useMenu();
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
          <span className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus,
            culpa modi numquam doloribus blanditiis consequatur totam
            repellendus maiores, quam deserunt. Earum, obcaecati ut natus rem
            nam ad ea quaerat.
          </span>

          <div className="flex max-h-[480px] mt-8">
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
              Devenez membre ZKEA Family, c&apos;est rapide et ça ne coute que 8
              Billions$!
            </button>
          </div>
        </section>
        <h2 className="text-start font-semibold text-3xl mt-14 text-black">
          En ce moment chez Zkea
        </h2>
        <section className="grid grid-cols-1 small:grid-cols-3 mt-8 gap-8 m-auto">
          {cards.map((item) => (
            <BasicCard key={item.title} item={item} />
          ))}
        </section>
      </DefaultLayout>
    </main>
  );
}
