"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface MenuContextProps {
  menuOpen: boolean;
  searchMenuOpen: boolean;
  viewOpen: boolean;
  toggleMenu: () => void;
  toggleSearchMenu: () => void;
  toggleView: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearchMenu = () => {
    setSearchMenuOpen(!searchMenuOpen);
  };

  const toggleView = () => {
    setViewOpen(!viewOpen);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu, searchMenuOpen, toggleSearchMenu, toggleView, viewOpen }}>
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
