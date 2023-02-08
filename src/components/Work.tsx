import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section>
      <h2>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div>
        <button type="button">UI/UX</button>
        <button type="button">Web App</button>
        <button type="button">Mobile App</button>
        <button type="button">React JS</button>
        <button type="button">All</button>
      </div>

      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Work;
