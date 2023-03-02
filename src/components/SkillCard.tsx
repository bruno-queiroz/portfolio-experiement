import { buildImageUrlFor } from "../utils/buildImageUrl";
import { Skill } from "./About";

const SkillCard = ({ title, image, description }: Skill) => {
  return (
    <article className="flex flex-col gap-3">
      <img
        src={buildImageUrlFor(image?.asset?._ref).url()}
        alt=""
        className="object-cover rounded-3xl"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

export default SkillCard;
