"use client";
import ProductCard from "@/app/components/ProductCard";
import { ProductI } from "./page";
import BreadCumb from "@/app/components/Breadcrumb";
import DefaultLayout from "@/app/layout/DefaultLayout";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type CurrentCategory = {
  name: string;
  slug: string;
};

export const Products = ({
  products,
  currentCategory,
}: {
  products: ProductI[];
  currentCategory: CurrentCategory;
}) => {
  const [showBtnTop, setShowBtnTop] = useState(false);
  const [productsOrder, setProductsOrder] = useState<ProductI[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtnTop(true);
      } else {
        setShowBtnTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSort = useCallback(
    async (type: "az" | "price") => {
      setIsSorting(true);
      let sortedProducts: ProductI[] = [];
      if (type === "az") {
        sortedProducts = await sortProductsAZ(products);
      } else if (type === "price") {
        sortedProducts = await sortProducts(products);
      }
      setProductsOrder(sortedProducts);
      setIsSorting(false);
    },
    [products]
  );

  useEffect(() => {
    const orderBy = searchParams.get("sort");
    if (orderBy === "price") {
      handleSort("price");
    } else if (orderBy === "az") {
      handleSort("az");
    } else {
      setProductsOrder(products);
    }
  }, [handleSort, products, searchParams]);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sortProducts = (products: ProductI[]): Promise<ProductI[]> => {
    return new Promise((resolve) => {
      const sortedProducts = products.sort((a, b) => a.price - b.price);
      resolve(sortedProducts);
    });
  };

  const sortProductsAZ = (products: ProductI[]): Promise<ProductI[]> => {
    return new Promise((resolve) => {
      const sortedProducts = products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      resolve(sortedProducts);
    });
  };

  return (
    <DefaultLayout>
      <BreadCumb
        routing={[{ name: "Categories", path: "/categories" }]}
        current={currentCategory?.name}
      />
      <div className="mt-8 flex justify-end text-sm gap-3">
        <button
          className={classNames({
            "text-black font-semibold opacity-1":
              searchParams.get("sort") === "price",
            "text-gray-900 opacity-60": searchParams.get("sort") !== "price",
          })}
          onClick={() =>
            router.push(pathname + "?" + createQueryString("sort", "price"))
          }
        >
          Prix
        </button>
        <span className="text-black">/</span>
        <button
          className={classNames({
            "text-black font-semibold opacity-1":
              searchParams.get("sort") === "az",
            "text-gray-900 opacity-60": searchParams.get("sort") !== "az",
          })}
          onClick={() =>
            router.push(pathname + "?" + createQueryString("sort", "az"))
          }
        >
          A-Z
        </button>
      </div>
      {isSorting && (
        <div className="text-center font-semibold">Tri en cours...</div>
      )}
      <div className="grid grid-cols-1 small:grid-cols-2 mt-8 gap-8 sm:grid-cols-3 xl:grid-cols-4 m-auto">
        {productsOrder.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
        {products.length === 0 && (
          <div className="text-start text-black">Aucun produit trouvé</div>
        )}
      </div>
      <button
        className={classNames(
          { hidden: !showBtnTop },
          "text-black fixed right-5 bottom-5 justify-center items-center rounded-full w-10 h-10 border border-gray-600 flex hover:scale-125 transition-all bg-white"
        )}
        onClick={() => handleTop()}
      >
        <svg
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_224_"
            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
          />
        </svg>
      </button>
    </DefaultLayout>
  );
};
