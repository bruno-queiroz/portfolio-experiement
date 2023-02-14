import React, { useState } from "react";
import { projectCard } from "../../public/portifolioData";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const [projectCategory, setProjectCategory] = useState("all");

  const changeProjectCategory = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setProjectCategory(event.currentTarget!.textContent as string);
  };

  return (
    <section className="flex flex-col items-center gap-12 bg-[#EDF2F8] px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-semibold text-center">
        My Creative <span className="text-blue-700">Portfolio</span> Section
      </h2>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          type="button"
          className={`p-2 rounded-md font-semibold ${
            projectCategory === "UI/UX"
              ? "bg-blue-700 text-white"
              : "bg-white text-black"
          }`}
          onClick={changeProjectCategory}
        >
          UI/UX
        </button>
        <button
          type="button"
          className={`p-2 rounded-md font-semibold ${
            projectCategory === "Web App"
              ? "bg-blue-700 text-white"
              : "bg-white text-black"
          }`}
          onClick={changeProjectCategory}
        >
          Web App
        </button>
        <button
          type="button"
          className={`p-2 rounded-md font-semibold ${
            projectCategory === "Mobile App"
              ? "bg-blue-700 text-white"
              : "bg-white text-black"
          }`}
          onClick={changeProjectCategory}
        >
          Mobile App
        </button>
        <button
          type="button"
          className={`p-2 rounded-md font-semibold ${
            projectCategory === "React JS"
              ? "bg-blue-700 text-white"
              : "bg-white text-black"
          }`}
          onClick={changeProjectCategory}
        >
          React JS
        </button>
        <button
          type="button"
          className={`p-2 rounded-md font-semibold ${
            projectCategory === "All"
              ? "bg-blue-700 text-white"
              : "bg-white text-black"
          }`}
          onClick={changeProjectCategory}
        >
          All
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,300px)] w-full max-w-[1000px] mx-auto justify-center gap-8">
        {projectCard.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
