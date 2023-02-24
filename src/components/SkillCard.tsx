import ImageUrlBuilder from "@sanity/image-url";
import React from "react";
import { Skill } from "./About";

const SkillCard = ({ title, image, description }: Skill) => {
  const builder = ImageUrlBuilder({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: "production",
  });

  const urlFor = (source: string) => {
    return builder.image(source);
  };

  return (
    <article className="flex flex-col gap-3">
      <img
        src={urlFor(image?.asset?._ref).url()}
        alt=""
        className="object-cover rounded-3xl"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

export default SkillCard;
