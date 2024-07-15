import classNames from "classnames";
import { useMenu } from "../context/MenuProvider";
import { useEffect, useRef, useState } from "react";
import { category } from "@/configs/category";

const NavModal = () => {
  const { toggleMenu, menuOpen } = useMenu();
  const [closing, setClosing] = useState(false);
  const [hoverCategory, setHoverCategory] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const categoryBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen && closing) {
      const timer = setTimeout(() => setClosing(false), 500); // Durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [menuOpen, closing]);

  useEffect(() => {
    if (!categoryBtnRef.current) return;

    const handleMouseEnter = () => {
      setHoverCategory(true);
      categoryBtnRef.current?.querySelector("span")?.classList.add("bg-white");
    };

    const handleMouseLeave = () => {
      setHoverCategory(false);
      categoryBtnRef.current?.querySelector("span")?.classList.remove("bg-white");
    };

    const CategoryBtn = categoryBtnRef.current;
    CategoryBtn.addEventListener("mouseenter", handleMouseEnter);
    CategoryBtn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      CategoryBtn.removeEventListener("mouseenter", handleMouseEnter);
      CategoryBtn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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
        "nav-modal absolute min-h-[70vh] h-[calc(100vh-2rem)] z-20 top-4 left-4 bottom-0 bg-modal rounded-lg p-8 w-[calc(100vw-2rem)] md:w-[360px] gap-8 flex flex-col",
        { open: !closing, close: closing }
      )}
    >
      <div>
        <button
          className="menu-button justify-center items-center rounded-full w-12 h-12 border border-gray-600 flex hover:scale-125 transition-all"
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
            <path d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343" stroke="currentColor"></path>
          </svg>
        </button>
      </div>
      <section className="flex flex-col gap-4 text-3xl w-full font-semibold transition-all duration-600">
        <div
          className={classNames("flex flex-col transition-all duration-700 w-full", {
            "translate-x-[-140%]": showCategory,
            "translate-x-[0%]": !showCategory,
          })}
        >
          <ul className="flex flex-col gap-4 text-3xl w-full">
            <li>
              <a href="/" className="text-white gradient-hover">
                Accueil
              </a>
            </li>
            <li>
              <button
                ref={categoryBtnRef}
                onClick={() => setShowCategory(true)}
                className="text-white flex justify-between items-center w-full CategoryBtn"
              >
                Categories
                <span
                  className={classNames(
                    "w-6 h-6 rounded-full  bg-blackFrame items-center flex justify-center hover:bg-white"
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
                      stroke={hoverCategory ? "#000000" : "currentColor"}
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>{" "}
              </button>
            </li>
            <li>
              <a href="/showroom" className="text-white gradient-hover">
                Showroom
              </a>
            </li>
            <a href="/contact" className="text-white gradient-hover">
              Contact
            </a>
          </ul>
        </div>

        <div
          className={classNames("flex flex-col transition-all duration-700 ", {
            "opacity-100 md:translate-y-[-35%] translate-y-[-45%]": showCategory,
            "opacity-0 translate-y-[140%]": !showCategory,
          })}
        >
          <ul className="flex flex-col gap-4 text-base md:text-2xl">
            <button
              onClick={() => setShowCategory(false)}
              className="flex gap-4 items-center w-full text-lg text-gray-400"
            >
              <svg
                role="presentation"
                focusable="false"
                width="5"
                height="8"
                className="icon icon-chevron-right-small reverse-icon rotate-180"
                viewBox="0 0 5 8"
              >
                <path d="m.75 7 3-3-3-3" fill={"none"} stroke={"currentColor"} strokeWidth="2"></path>{" "}
              </svg>
              Categories
            </button>
            {category.map((item) => (
              <li key={item.slug}>
                <a href={"/category/" + item.slug} className="text-white gradient-hover">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavModal;
