"use client";

import { useEffect } from "react";
import { useMenu } from "../context/MenuProvider";
import NavModal from "./NavModal";
import SearchModal from "./SearchModal";
import ViewModal from "./ViewModal";

const ModalProvider = () => {
  const { menuOpen, toggleMenu, searchMenuOpen, toggleSearchMenu, viewOpen, toggleView } = useMenu();

  useEffect(() => {
    // disable scrolling when menu is open
    if (menuOpen || searchMenuOpen || viewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen, searchMenuOpen , viewOpen]);
  return (
    <div>
      {menuOpen && <NavModal />}
      {viewOpen && <ViewModal />}
      {menuOpen && (
        <div className="overlay bg-[#0006] absolute h-full top-0 left-0 w-full" onClick={() => toggleMenu()}></div>
      )}
      {searchMenuOpen && <SearchModal />}
      {searchMenuOpen && (
        <div
          className="overlay bg-[#0006] absolute h-full top-0 left-0 w-full"
          onClick={() => toggleSearchMenu()}
        ></div>
      )}
      {viewOpen && (
        <div className="overlay bg-[#0006] absolute h-full top-0 left-0 w-full" onClick={() => toggleView("")}></div>
      )}
    </div>
  );
};

export default ModalProvider;
