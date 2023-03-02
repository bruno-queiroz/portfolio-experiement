import { ProjectCardTypes } from "../components/Work";

export const filterProjects = (
  projects: ProjectCardTypes[],
  filter: string
) => {
  if (filter === "All") return projects;
  const projectsFiltered = projects.filter(
    (project) => project.category === filter
  );
  return projectsFiltered;
};
