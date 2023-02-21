import React, { useEffect, useRef, useState } from "react";

import { experienceData, TechnologiesData } from "../../public/portifolioData";
import { createObserver } from "../utils/intersectionObserver";
import CareerTimeline from "./CareerTimeline";
import TechnologySticker from "./TechnologySticker";

const Skill = () => {
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleSkillIntersection = (entry: IntersectionObserverEntry) => {
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const clearIntersection = createObserver(
      handleSkillIntersection,
      [sectionElementRef.current!],
      "-100px"
    );
    return () => {
      clearIntersection();
    };
  }, []);
  return (
    <section
      className={`flex flex-col justify-center gap-4 p-4 py-12 min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      ref={sectionElementRef}
    >
      <h2 className="text-4xl md:text-5xl text-center font-semibold py-12">
        Skills & Experience
      </h2>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:max-w-[800px] lg:mx-auto">
        <div className="flex gap-6 flex-wrap justify-center w-full">
          {TechnologiesData.map((technology, index) => (
            <TechnologySticker key={index} {...technology} />
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:items-center">
          {experienceData.map((experience, index) => (
            <CareerTimeline key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;