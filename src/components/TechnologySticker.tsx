import React from "react";

interface TechnologyStickerProps {
  technology: string;
  img: string;
}

const TechnologySticker = ({ technology, img }: TechnologyStickerProps) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-[max-contet] p-4  rounded-[50%] bg-[#EDF2F8]">
        <img src={img} alt="" className="object-cover  w-[45px] h-[45px]" />
      </div>
      {technology}
    </div>
  );
};

export default TechnologySticker;
