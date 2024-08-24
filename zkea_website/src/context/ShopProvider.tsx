"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { productInterface } from "../components/ProductCard";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";

interface ShopContextProps {
  shopCount: number;
  shopItems: productInterface[];
  addShopItem: (item: productInterface) => void;
  removeShopItem: (item: productInterface) => void;
}

const ShopContet = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [shopItems, setShopItems] = useState<productInterface[]>([]);

  // Uncomment this block to use local storage
  useEffect(() => {
    const localShopItems = getLocalStorage("soz_shopItems");
    if (localShopItems.length > 0) {
      setShopItems(localShopItems);
    }
  }, []);

  const addShopItem = (item: productInterface) => {
    setLocalStorage("soz_shopItems", [...shopItems, item]);
    setShopItems([...shopItems, item]);
  };

  const removeShopItem = (item: productInterface) => {
    setLocalStorage(
      "soz_shopItems",
      shopItems.filter((shopItem) => shopItem !== item)
    );
    setShopItems(shopItems.filter((shopItem) => shopItem !== item));
  };

  return (
    <ShopContet.Provider
      value={{
        addShopItem,
        removeShopItem,
        shopItems,
        shopCount: shopItems.length,
      }}
    >
      {children}
    </ShopContet.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContet);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
