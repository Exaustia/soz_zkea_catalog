"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const imgs = ["/images/ZKEA1.png", "/images/show_b.webp"];

/* eslint-disable @next/next/no-img-element */
const CarouselPage = () => {
  return (
    <div className="h-fit">
      <div className="w-full justify-center flex">
        <Link
          href={"/showrooms"}
          className="text-black text-center font-semibold p-2 rounded-lg mr-0 flex items-center justify-center gap-3"
        >
          Voir tous les showroom{" "}
          <Image
            src="/images/icons/arrow-right.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="relative mt-4">
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          interval={10}
          className=""
        >
          {imgs.map((_, index) => (
            <img
              src={_}
              alt="carouse_img"
              className={"object-cover m-auto"}
              key={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
