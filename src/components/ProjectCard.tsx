import React from "react";
import { buildImageUrlFor } from "../utils/buildImageUrl";
import { ProjectCardTypes } from "./Work";

const ProjectCard = ({
  title,
  category,
  image,
  description,
}: ProjectCardTypes) => {
  return (
    <article className="flex flex-col gap-3 text-center p-4 bg-white rounded-md shadow-md">
      <div className="flex relative">
        <img
          src={buildImageUrlFor(image?.asset?._ref).url()}
          alt=""
          className="object-cover rounded-md"
        />
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
