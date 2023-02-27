import React, { useEffect, useState } from "react";

import {
  IoIosArrowBack as LeftArrowIcon,
  IoIosArrowForward as RightArrowIcon,
} from "react-icons/io";
import { SanityResultDefaultTypes } from "../fetch/config";
import { getTestimonials } from "../fetch/getTestimonials";
import { buildImageUrlFor } from "../utils/buildImageUrl";

interface TestimonialData {
  testimonial: {
    testimonialText: string;
    testimonialName: string;
    testimonialCompany: string;
    testimonialImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
}

export type TestimonialTypes = SanityResultDefaultTypes & TestimonialData;

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carousel, setCarousel] = useState<TestimonialTypes[]>([]);
  console.log(carousel);
  console.log(carousel?.[carouselIndex]?.testimonial.testimonialText);
  useEffect(() => {
    (async () => {
      setCarousel(await getTestimonials());
    })();
  }, []);

  const getNextTestimonial = () => {
    if (carouselIndex === carousel.length - 1) {
      setCarouselIndex(0);
      return;
    }
    setCarouselIndex((prev) => prev + 1);
  };

  const getPreviousTestimonial = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(carousel.length - 1);
      return;
    }
    setCarouselIndex((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 bg-white w-full items-center p-6 max-w-[600px] rounded-lg shadow-lg md:gap-10 md:p-12 lg:flex-row">
        <img
          src={
            carousel?.[carouselIndex]?.testimonial.testimonialImage?.asset?._ref
              ? buildImageUrlFor(
                  carousel?.[carouselIndex]?.testimonial.testimonialImage?.asset
                    ?._ref
                ).url()
              : ""
          }
          alt=""
          className="w-[90px] h-[90px] mx-auto object-cover"
        />

        <div className="lg:flex lg:flex-col lg:gap-12">
          <p className="text-[1.25rem] text-gray-700">
            {carousel?.[carouselIndex]?.testimonial.testimonialText}
          </p>
          <div className="flex flex-col mt-3">
            <span className="text-blue-700">
              {carousel?.[carouselIndex]?.testimonial.testimonialName}
            </span>
            <span className="text-gray-600">
              {carousel?.[carouselIndex]?.testimonial.testimonialCompany}
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
