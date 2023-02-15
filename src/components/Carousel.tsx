import React, { useState } from "react";

import {
  IoIosArrowBack as LeftArrowIcon,
  IoIosArrowForward as RightArrowIcon,
} from "react-icons/io";
import { testimonialsData } from "../../public/portifolioData";

interface CarouselData {
  img: string;
  testimonial: string;
  name: string;
  company: string;
}

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselData, setCarouselData] =
    useState<CarouselData[]>(testimonialsData);

  const getNextTestimonial = () => {
    if (carouselIndex === carouselData.length - 1) {
      setCarouselIndex(0);
      return;
    }
    setCarouselIndex((prev) => prev + 1);
  };

  const getPreviousTestimonial = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(carouselData.length - 1);
      return;
    }
    setCarouselIndex((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 bg-white w-full items-center p-6 max-w-[600px] rounded-lg shadow-lg md:gap-10 md:p-12 lg:flex-row">
        <img
          src={carouselData?.[carouselIndex]?.img}
          alt=""
          className="w-[90px] h-[90px] mx-auto object-cover"
        />

        <div className="lg:flex lg:flex-col lg:gap-12">
          <p className="text-[1.25rem] text-gray-700">
            {carouselData?.[carouselIndex]?.testimonial}
          </p>
          <div className="flex flex-col mt-3">
            <span className="text-blue-700">
              {carouselData?.[carouselIndex]?.name}
            </span>
            <span className="text-gray-600">
              {carouselData?.[carouselIndex]?.company}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center font-semibold">
        <button
          type="button"
          className="p-5 shadow-md rounded-[50%] bg-white hover:bg-blue-700 hover:text-white"
          onClick={getPreviousTestimonial}
        >
          <LeftArrowIcon />
        </button>
        <button
          type="button"
          className="p-5 shadow-md rounded-[50%] bg-white hover:bg-blue-700 hover:text-white"
          onClick={getNextTestimonial}
        >
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
