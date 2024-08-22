import classNames from "classnames";
import { useMenu } from "../context/MenuProvider";
import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../hooks/searchHook";
import { searchProductByString } from "@/utils/searchProductByString";
import { productInterface } from "../components/ProductCard";
import Link from "next/link";
import { findSlug } from "@/utils/findType";

const SearchModal = () => {
  const { searchMenuOpen, toggleSearchMenu } = useMenu();
  const [closing, setClosing] = useState(false);
  const [products, setProducts] = useState<productInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 600);

  useEffect(() => {
    if (debouncedSearch) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
      const data = searchProductByString(debouncedSearch);
      setProducts(data);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (!searchMenuOpen && closing) {
      const timer = setTimeout(() => setClosing(false), 500); // Durée de l'animation
      return () => clearTimeout(timer);
    }
  }, [searchMenuOpen, closing]);

  const handleClose = () => {
    setClosing(true);
    const timer = setTimeout(() => {
      setClosing(false);
      toggleSearchMenu();
    }, 500); // Durée de l'animation
    return () => clearTimeout(timer);
  };

  const handleSearch = (value: ChangeEvent<HTMLInputElement>) => {
    setSearch(value.target.value);
  };

  return (
    <div
      className={classNames(
        "search-modal absolute min-h-[70vh] h-[calc(100vh-2rem)] z-20 top-4 right-4 bottom-0 bg-white rounded-sm p-8 w-[calc(100vw-2rem)] md:w-[40vw] gap-8 flex flex-col",
        { open: !closing, close: closing }
      )}
    >
      <div className="flex justify-end">
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
            <path
              d="M17.658 6.343 6.344 17.657M17.658 17.657 6.344 6.343"
              stroke="black"
            ></path>
          </svg>
        </button>
      </div>
      <section className="flex flex-col gap-4 text-3xl w-full font-semibold transition-all duration-600 overflow-auto">
        <div className="flex gap-2 justify-between border-b-[1px] border-black">
          <input
            onChange={(e) => handleSearch(e)}
            type="text"
            value={search}
            placeholder="Recherche"
            className="p-2 bg-transparent focus:outline-none w-3/4 text-black text-lg"
          />
          {search.length > 0 && (
            <button
              className="text-gray-500 text-sm"
              onClick={() => setSearch("")}
            >
              Effacer
            </button>
          )}
        </div>
        <div className="flex flex-col gap-4 text-black ">
          {loading ? (
            <div role="status" className="max-w-sm animate-pulse mt-4">
              <div className="h-2.5 bg-gray-600 rounded-full w-48 mb-4"></div>
              <div className="h-2 bg-gray-600 rounded-full max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-600 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-600 rounded-full max-w-[330px] mb-2.5"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              {products.length === 0 && search.length > 0 && (
                <span className="text-base">Aucun produit correspondant</span>
              )}
              {products.map((product) => {
                const category = findSlug(product.type);
                return (
                  <Link
                    onClick={() => handleClose()}
                    href={`/categories/${category}#${product.model}`}
                    key={product.model}
                    className="flex gap-4 text-sm"
                  >
                    {product.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchModal;
