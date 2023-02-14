import React from "react";

interface ProjectCardProps {
  category: string;
  title: string;
  img: string;
  description: string;
}

const ProjectCard = ({
  title,
  category,
  img,
  description,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col gap-3 text-center p-4 bg-white rounded-md shadow-md">
      <div className="flex relative">
        <img src={img} alt="" className="object-cover rounded-md" />
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] bg-white rounded-t-md px-3 py-1 pb-0 text-gray-500">
          {category}
        </div>
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </article>
  );
};

export default ProjectCard;
