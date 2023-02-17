import React from "react";
import SkillCard from "./SkillCard";
import { skillData } from "../../public/portifolioData";
const About = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 min-h-[100vh]">
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
