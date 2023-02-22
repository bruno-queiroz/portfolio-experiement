import React, { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";
import { skillData } from "../../public/portifolioData";
import { createObserver } from "../utils/intersectionObserver";
import { useAtom } from "jotai";
import { navigateAtom } from "../App";

const About = () => {
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [, setCurrentNavigateState] = useAtom(navigateAtom);

  const handleAboutIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setCurrentNavigateState("about");
    }
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const clearIntersection = createObserver(
      handleAboutIntersection,
      [sectionElementRef.current!],
      "-100px"
    );
    return () => {
      clearIntersection();
    };
  }, []);
  return (
    <section
      className={`flex flex-col items-center justify-center p-4 min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      id="about"
      ref={sectionElementRef}
    >
      <h2 className="text-4xl max-w-[525px] font-semibold text-center py-12 leading-[3rem] lg:leading-[10rem]]">
        <span className="">I know that</span>{" "}
        <span className="text-blue-700">Good Apps</span>
        <span> Means</span> <span className="text-blue-700">Good Business</span>
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,200px)] mt-4 justify-center gap-12 max-w-[1000px] mx-auto w-full pb-12">
        {skillData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default About;
