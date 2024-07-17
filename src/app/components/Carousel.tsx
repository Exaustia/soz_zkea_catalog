"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const imgs = [
  "https://www.ikea.com/images/mobilier-de-jardin-avec-en-premier-plan-une-main-tenant-une--89c8ce4a40d8d0be0673313c57fb6f8d.png?f=xs",
  "https://www.ikea.com/images/mobilier-de-jardin-avec-en-premier-plan-une-main-tenant-une--89c8ce4a40d8d0be0673313c57fb6f8d.png?f=xs",
  "https://www.ikea.com/images/mobilier-de-jardin-avec-en-premier-plan-une-main-tenant-une--89c8ce4a40d8d0be0673313c57fb6f8d.png?f=xs",
];

/* eslint-disable @next/next/no-img-element */
const CarouselPage = () => {
  return (
    <div>
      <div className="w-full justify-center flex">
        <Link
          href={"/showroom"}
          className="text-black text-center font-semibold p-2 rounded-lg mr-0 flex items-center justify-center gap-3"
        >
          Voir tous les showrooms <Image src="/images/icons/arrow-right.svg" alt="arrow" width={20} height={20} />
        </Link>
      </div>
      <div className="h-56 md:h-96 relative mt-4">
        <Carousel infiniteLoop={true} showThumbs={false}>
          {imgs.map((_, index) => (
            <Link href={"/showroom"} className={"h-56 md:h-96"} key={index}>
              <img src={_} alt="..." className={"h-56 md:h-96 object-cover"} />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
