import React, { useState } from "react";
import logoImg from "../assets/images/logo.svg";
import { HiMenuAlt4 as MenuIcon } from "react-icons/hi";
import { GrClose as CloseMenuIcon } from "react-icons/gr";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 p-4 bg-white w-full">
      <div className="flex justify-between w-full max-w-[1440px]">
        <span className="font-bold text-2xl">
          MIC<span className="text-blue-700">AEL</span>
        </span>
        <nav className="">
          <button
            type="button"
            className="p-2 rounded-[50%] bg-blue-700 text-white text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          <div
            className={`fixed inset-0 bg-[rgba(0,0,0,0.3)] ${
              isMenuOpen ? "grid" : "hidden"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 bottom-0 left-[25%] bg-white p-4 transition-transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <button
              type="button"
              className="mb-8 flex justify-end ml-auto text-3xl font-semibold text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseMenuIcon />
            </button>
            <ul className="flex flex-col gap-8">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">WORK</a>
              </li>
              <li>
                <a href="">SKILLS</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
