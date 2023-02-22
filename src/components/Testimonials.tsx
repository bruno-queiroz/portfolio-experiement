import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { testimonialsBrandsImg } from "../../public/portifolioData";
import { navigateAtom } from "../App";
import { createObserver } from "../utils/intersectionObserver";
import Carousel from "./Carousel";

const Testimonials = () => {
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [, setCurrentNavigateState] = useAtom(navigateAtom);

  const handleTestimonialsIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setCurrentNavigateState("testimonials");
    }
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const clearIntersection = createObserver(
      handleTestimonialsIntersection,
      [sectionElementRef.current!],
      "-100px"
    );
    return () => {
      clearIntersection();
    };
  }, []);
  return (
    <section
      className={`flex flex-col items-center justify-center bg-[#EDF2F8] min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      ref={sectionElementRef}
    >
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
