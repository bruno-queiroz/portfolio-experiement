import React from "react";
import { getSanityURL } from "../fetch/config";
import { buildImageUrlFor } from "../utils/buildImageUrl";

import { TechnologyStickerTypes } from "./Skills";

const TechnologySticker = ({
  technologyName,
  technologyImage,
}: TechnologyStickerTypes) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-[max-contet] p-4  rounded-[50%] bg-[#EDF2F8]">
        <img
          src={buildImageUrlFor(technologyImage?.asset?._ref).url()}
          alt=""
          className="object-cover  w-[55px] h-[55px]"
        />
      </div>
      {technologyName}
    </div>
  );
};

export default TechnologySticker;
