"use client";

import { useEffect } from "react";
import { useMenu } from "../../context/MenuProvider";
import NavModal from "./NavModal";
import SearchModal from "./SearchModal";
import ViewModal from "./ViewModal";
import PigeonModal from "./FamilyModal";

const ModalProvider = () => {
  const {
    menuOpen,
    toggleMenu,
    searchMenuOpen,
    toggleSearchMenu,
    setFamilyOpen,
    familyOpen,
    viewOpen,
    toggleView,
  } = useMenu();

  useEffect(() => {
    // disable scrolling when menu is open
    if (menuOpen || searchMenuOpen || viewOpen || familyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen, searchMenuOpen, viewOpen, familyOpen]);
  return (
    <div>
      {viewOpen && (
        <>
          <ViewModal />
          <Overlay onClick={() => toggleView("")} />
        </>
      )}
      {familyOpen && (
        <>
          <PigeonModal /> <Overlay onClick={() => setFamilyOpen(false)} />
        </>
      )}
      {menuOpen && (
        <>
          <NavModal />
          <Overlay onClick={() => toggleMenu()} />
        </>
      )}
      {searchMenuOpen && (
        <>
          <SearchModal />
          <Overlay onClick={() => toggleSearchMenu()} />
        </>
      )}
    </div>
  );
};

export default ModalProvider;

const Overlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="overlay bg-[#0006] absolute h-full top-0 left-0 w-full"
      onClick={() => onClick()}
    ></div>
  );
};
