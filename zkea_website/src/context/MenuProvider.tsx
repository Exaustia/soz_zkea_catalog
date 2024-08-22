"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

interface MenuContextProps {
  menuOpen: boolean;
  searchMenuOpen: boolean;
  viewOpen: boolean;
  toggleMenu: () => void;
  toggleSearchMenu: () => void;
  toggleView: (elm: string) => void;
  pigeonOpen: boolean;
  setPigeonOpen: (value: boolean) => void;
  elm: string;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [pigeonOpen, setPigeonOpen] = useState(false);
  const [elm, setElm] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearchMenu = () => {
    setSearchMenuOpen(!searchMenuOpen);
  };

  const toggleView = (elm: string) => {
    setViewOpen(!viewOpen);
    setElm(elm);
  };

  return (
    <MenuContext.Provider
      value={{
        elm,
        menuOpen,
        pigeonOpen,
        setPigeonOpen,
        toggleMenu,
        searchMenuOpen,
        toggleSearchMenu,
        toggleView,
        viewOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
