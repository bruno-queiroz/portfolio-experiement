import React from "react";
import { testimonialsBrandsImg } from "../../public/portifolioData";
import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#EDF2F8] min-h-[100vh]">
      <div className="p-4 py-12 flex flex-col gap-12">
        <Carousel />
        <div className="grid grid-cols-[repeat(auto-fit,170px)] justify-center gap-4">
          {testimonialsBrandsImg.map((testimonialBrandImg, index) => (
            <img
              src={testimonialBrandImg}
              alt="brand-image"
              key={index}
              className="grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
