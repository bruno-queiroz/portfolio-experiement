import React from "react";
import logoImg from "../assets/images/logo.svg";
import { HiMenuAlt4 as MenuIcon } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div>
        <img src="" alt="" />
        <nav>
          <button type="button">
            <MenuIcon />
          </button>
          <ul>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
