"use client";

import { useEffect, useState } from "react";
import { useMenu } from "../context/MenuProvider";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const { toggleMenu, toggleSearchMenu } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "px-5 py-3 md:px-12 md:py-6 w-full border-b-[1px] "
      )}
    >
      <section className="items-center w-full grid grid-cols-3 max-w-screen-2xl m-auto">
        <button className="justify-center items-center w-fit">
          <svg
            onClick={() => toggleMenu()}
            role="presentation"
            strokeWidth="2"
            focusable="false"
            width="22"
            height="22"
            className="icon icon-hamburger"
            viewBox="0 0 22 22"
            color="black"
          >
            <path
              d="M1 5h20M1 11h20M1 17h20"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <Link
          href={"/"}
          className="text-black text-2xl font-bold justify-center items-center m-auto"
        >
          <Image
            src="/images/logo_zkea_4-01.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="gap-4 items-center justify-end flex">
          <svg
            onClick={() => toggleSearchMenu()}
            role="presentation"
            strokeWidth="2"
            focusable="false"
            width="22"
            height="22"
            className="icon icon-search cursor-pointer"
            viewBox="0 0 22 22"
          >
            <circle cx="11" cy="10" r="7" fill="none" stroke="black"></circle>
            <path d="m16 15 3 3" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <svg
            role="presentation"
            strokeWidth="2"
            focusable="false"
            width="22"
            height="22"
            className="icon icon-cart"
            viewBox="0 0 22 22"
          >
            <path
              d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </section>
    </header>
  );
};

export default Header;
