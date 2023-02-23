import React from "react";

import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { RiFacebookFill as FacebookIcon } from "react-icons/ri";
import { BsInstagram as InstagramIcon } from "react-icons/bs";

const SocialNav = () => {
  return (
    <nav className="fixed left-2 md:left-6 bottom-8 z-50">
      <ul className="flex flex-col gap-4">
        <li className=" ">
          <a
            href=""
            className="grid place-content-center rounded-[50%] w-[40px] h-[40px] bg-white border-[1px] border-gray-300 shadow transition-colors hover:text-white hover:bg-blue-700"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href=""
            className="grid place-content-center rounded-[50%] w-[40px] h-[40px] bg-white border-[1px] border-gray-300 shadow transition-colors hover:text-white hover:bg-blue-700"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href=""
            className="grid place-content-center rounded-[50%] w-[40px] h-[40px] bg-white border-[1px] border-gray-300 shadow transition-colors hover:text-white hover:bg-blue-700"
          >
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
