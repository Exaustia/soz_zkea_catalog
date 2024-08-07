"use client";
import DefaultLayout from "./layout/DefaultLayout";

import MenuCategory from "./components/MenuCategory";
import CarouselPage from "./components/Carousel";
import BasicCard from "./components/BasicCard";
import { useMenu } from "./context/MenuProvider";

const cards = [
  {
    color: "bg-green-600",
    title: "Petit Caillou",
    image: "caillou_a.jpg",
    description:
      'Un classique intemporel ! Le Petit Caillou, votre compagnon de poche parfait. Parfait pour les collectionneurs débutants ou pour ceux qui cherchent un nouveau "meilleur ami" qui ne parle jamais. Attention, il peut mordre... si vous avez une imagination débordante !',
  },
  {
    color: "bg-[#CC0008]",
    title: "Caillou de Compétition",
    image: "caillou_c.jpg",
    description:
      " Le Plus Gros Caillou, pour ceux qui veulent passer au niveau supérieur. Plus gros, plus lourd, et avec une présence imposante. Idéal pour les démonstrations de force, ou simplement pour impressionner vos amis. Parce que, avouons-le, qui n'aimerait pas avoir un caillou XXL ?",
  },
  {
    color: "bg-blue-600",
    title: "Pierre Venue des Étoiles",
    image: "caillou_b.jpg",
    description:
      "La Météorite, un véritable morceau de l'espace à portée de main ! Pour ceux qui rêvent de l'infini et au-delà. Avoir une météorite, c'est un peu comme avoir son propre mini-OVNI. Parfait pour épater la galerie et se prendre pour un astronaute sans quitter son canapé.",
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
          <span className="text-black text-xs md:text-base">
            Bienvenue dans nos Showrooms, l&apos;endroit où les maisons simples
            deviennent extraordinaires ! Explorez nos espaces soigneusement
            aménagés pour découvrir des inspirations de décoration et
            d&apos;agencement. Chaque showroom est conçu pour vous donner un aperçu
            réaliste et chaleureux de ce à quoi pourrait ressembler votre future
            maison. Laissez-vous charmer par nos intérieurs accueillants, des
            cuisines fonctionnelles aux salons confortables. Entrez, faites
            comme chez vous, et laissez libre cours à vos rêves d&apos;habitat
            parfait. On parie que vous ne voudrez plus partir !
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
              1999$!
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
