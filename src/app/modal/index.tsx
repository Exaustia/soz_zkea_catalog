"use client";

import { useEffect } from "react";
import { useMenu } from "../context/MenuProvider";
import NavModal from "./NavModal";
import SearchModal from "./SearchModal";

const ModalProvider = () => {
  const { menuOpen, toggleMenu, searchMenuOpen, toggleSearchMenu } = useMenu();

  useEffect(() => {
    // disable scrolling when menu is open
    if (menuOpen || searchMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen, searchMenuOpen]);
  return (
    <div>
      {menuOpen && <NavModal />}
      {menuOpen && (
        <div className="overlay bg-[#0006] absolute h-full top-0 left-0 w-full" onClick={() => toggleMenu()}></div>
      )}
      {searchMenuOpen && (
        <div
          className="overlay bg-[#0006] absolute h-full top-0 left-0 w-full"
          onClick={() => toggleSearchMenu()}
        ></div>
      )}
      {searchMenuOpen && <SearchModal />}
    </div>
  );
};

export default ModalProvider;
