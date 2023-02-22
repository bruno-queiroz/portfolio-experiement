import { useAtom } from "jotai";
import React from "react";
import { navigateAtom } from "../App";

const sections = [
  "home",
  "about",
  "work",
  "skills",
  "testimonials",
  "takeACoffee",
];

const NavigationIndicator = () => {
  const [currentNavigateState] = useAtom(navigateAtom);
  console.log(currentNavigateState);

  return (
    <div className="flex flex-col gap-4 fixed right-2 top-[50%] ">
      {sections.map((section, index) => (
        <div
          className={`w-[15px] h-[15px] rounded-[50%] cursor-pointer ${
            section === currentNavigateState ? "bg-blue-700" : "bg-gray-500"
          }`}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavigationIndicator;
