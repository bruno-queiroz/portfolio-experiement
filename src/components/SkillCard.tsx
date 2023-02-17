import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  img: string;
}

const SkillCard = ({ title, img, description }: SkillCardProps) => {
  return (
    <article className="flex flex-col gap-3">
      <img src={img} alt="" className="object-cover rounded-3xl" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

export default SkillCard;
