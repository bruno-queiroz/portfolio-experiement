import React from "react";

import { experienceData, TechnologiesData } from "../../public/portifolioData";
import CareerTimeline from "./CareerTimeline";
import TechnologySticker from "./TechnologySticker";

const Skill = () => {
  return (
    <section className="flex flex-col gap-4 p-4 py-24">
      <h2 className="text-4xl text-center font-semibold py-12">
        Skills & Experience
      </h2>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:max-w-[800px] lg:mx-auto">
        <div className="flex gap-4 flex-wrap justify-center w-full">
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
