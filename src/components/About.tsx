import React from "react";
import SkillCard from "./SkillCard";
import { skillData } from "../../public/portifolioData";
const About = () => {
  return (
    <section className="flex flex-col items-center p-4">
      <h2 className="text-4xl md:text-5xl font-semibold text-center py-12 leading-[4rem]">
        I know that <span className="text-blue-700">Good Apps</span> Means{" "}
        <span className="text-blue-700">Good Business</span>
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
