import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { navigateAtom } from "../App";
import { SanityResultDefaultTypes } from "../fetch/config";
import { getWork } from "../fetch/getWork";
import { filterProjects } from "../utils/filterProjects";
import { createObserver } from "../utils/intersectionObserver";
import ProjectCard from "./ProjectCard";

const projectTechnologies = [
  "UI/UX",
  "Web App",
  "Mobile App",
  "React JS",
  "All",
];

interface ProjectCardData {
  category: string;
  title: string;
  description: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export type ProjectCardTypes = ProjectCardData & SanityResultDefaultTypes;

const Work = () => {
  const [projects, setProjects] = useState<ProjectCardTypes[]>([]);
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [projectCategory, setProjectCategory] = useState("All");
  const [, setCurrentNavigateState] = useAtom(navigateAtom);
  const filteredProjectes = filterProjects(projects, projectCategory);

  useEffect(() => {
    (async () => {
      setProjects(await getWork());
    })();
  }, []);

  const handleWorkIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setCurrentNavigateState("work");
    }
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const clearObserver = createObserver(
      handleWorkIntersection,
      [sectionElementRef.current!],
      "-100px"
    );
    return () => clearObserver();
  }, []);

  const changeProjectCategory = (projectCategory: string) => {
    setProjectCategory(projectCategory);
  };

  return (
    <section
      className={`flex flex-col items-center justify-center gap-12 bg-[#EDF2F8] px-4 py-12 min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      id="work"
      ref={sectionElementRef}
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-center">
        My Creative <span className="text-blue-700">Portfolio</span> Section
      </h2>

      <div className="flex gap-3 flex-wrap justify-center">
        {projectTechnologies.map((project, index) => (
          <button
            key={index}
            type="button"
            className={`p-2 rounded-md font-semibold ${
              projectCategory === project
                ? "bg-blue-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => changeProjectCategory(project)}
          >
            {project}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,300px)] w-full max-w-[1000px] mx-auto justify-center gap-8">
        {filteredProjectes?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
