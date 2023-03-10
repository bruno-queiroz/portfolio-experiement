import React, { useState } from "react";
import { HiMenuAlt4 as MenuIcon } from "react-icons/hi";
import { GrClose as CloseMenuIcon } from "react-icons/gr";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 p-4 bg-[rgba(255,255,255,0.4)] w-full z-50">
      <div className="flex items-center justify-between w-full max-w-[1440px] md:justify-center mx-auto">
        <span className="font-bold text-2xl leading-[0] md:absolute md:left-4">
          MIC<span className="text-blue-700">AEL</span>
        </span>
        <nav className="">
          <button
            type="button"
            className="p-2 rounded-[50%] bg-blue-700 text-white text-2xl md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          <div
            className={`fixed inset-0 bg-[rgba(0,0,0,0.3)] ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 bottom-0 left-[25%] bg-white md:bg-transparent p-4 transition-transform md:relative md:inset-0 md:translate-x-0 ${
              isMenuOpen ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <button
              type="button"
              className="mb-8 flex justify-end ml-auto text-3xl font-semibold text-blue-700 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseMenuIcon />
            </button>
            <ul className="flex flex-col gap-8 md:flex-row md:gap-4 mx-auto text-gray-600 text-font-md">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#work">WORK</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
