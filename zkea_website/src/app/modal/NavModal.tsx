import classNames from "classnames";
import { useMenu } from "../../context/MenuProvider";
import { useEffect, useRef, useState } from "react";
import { category } from "@/configs/category";
import Link from "next/link";

const NavModal = () => {
  const { toggleMenu, menuOpen } = useMenu();
  const [closing, setClosing] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const categoryBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen && closing) {
      const timer = setTimeout(() => setClosing(false), 500); // Durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [menuOpen, closing]);

  const handleClose = () => {
    setClosing(true);
    const timer = setTimeout(() => {
      setClosing(false);
      toggleMenu();
    }, 500); // Durée de l'animation
    return () => clearTimeout(timer);
  };

  return (
    <div
      className={classNames(
        "nav-modal absolute min-h-[70vh] h-[calc(100vh-2rem)] z-20 top-4 left-4 bottom-0 rounded-sm p-4 w-[calc(100vw-2rem)] md:w-[360px] gap-8 flex flex-col text-black bg-white",
        { open: !closing, close: closing }
      )}
    >
      <div>
        <button
          className="menu-button justify-center items-center rounded-full w-10 h-10 border border-gray-600 flex hover:scale-125 transition-all"
          onClick={() => handleClose()}
        >
          <svg
            role="presentation"
            strokeWidth="2"
            focusable="false"
            width="19"
            height="19"
            className="icon icon-close"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343"
              stroke="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <section className="flex flex-col gap-4 text-3xl w-full font-semibold transition-all duration-600">
        <div
          className={classNames(
            "flex flex-col transition-all duration-700 w-full",
            {
              "translate-x-[-140%]": showCategory,
              "translate-x-[0%]": !showCategory,
            }
          )}
        >
          <ul className="flex flex-col gap-4 text-3xl w-full text-black">
            <li className="">
              <Link
                href="/"
                className="text-black"
                onClick={() => handleClose()}
              >
                Accueil
              </Link>
            </li>
            <li>
              <button
                ref={categoryBtnRef}
                onClick={() => setShowCategory(true)}
                className="flex justify-between items-center w-full CategoryBtn"
              >
                Categories
                <span
                  className={classNames(
                    "w-6 h-6 rounded-full items-center flex justify-center border-1 border-black bg-white"
                  )}
                >
                  <svg
                    role="presentation"
                    focusable="false"
                    width="5"
                    height="8"
                    className="icon icon-chevron-right-small reverse-icon"
                    viewBox="0 0 5 8"
                  >
                    <path
                      d="m.75 7 3-3-3-3"
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>{" "}
              </button>
            </li>
            <li>
              <Link
                href="/showroom"
                className="text-black"
                onClick={() => handleClose()}
              >
                Showroom
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={classNames("flex flex-col transition-all duration-700 ", {
            "opacity-100 md:translate-y-[-25%] translate-y-[-32%]":
              showCategory,
            "opacity-0 translate-y-[140%]": !showCategory,
          })}
        >
          <ul className="flex flex-col  text-base md:text-2xl h-full">
            <button
              onClick={() => setShowCategory(false)}
              className="flex gap-1 items-center w-full text-lg text-gray-400"
            >
              <svg
                role="presentation"
                focusable="false"
                width="5"
                height="8"
                className="icon icon-chevron-right-small reverse-icon rotate-180"
                viewBox="0 0 5 8"
              >
                <path
                  d="m.75 7 3-3-3-3"
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth="2"
                ></path>{" "}
              </svg>
              Categories
            </button>
            {category.map((item) => (
              <li key={item.slug} className="leading-5">
                <Link
                  href={"/categories/" + item.slug}
                  className="text-black text-sm leading-normal"
                  onClick={() => handleClose()}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavModal;
