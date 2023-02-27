import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { testimonialsBrandsImg } from "../../public/portifolioData";
import { navigateAtom } from "../App";
import { SanityResultDefaultTypes } from "../fetch/config";
import { getBrandLogos } from "../fetch/getBrandLogos";
import { buildImageUrlFor } from "../utils/buildImageUrl";
import { createObserver } from "../utils/intersectionObserver";
import Carousel from "./Carousel";

interface BrandLogoData {
  brandImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export type BrandLogoTypes = SanityResultDefaultTypes & BrandLogoData;

const Testimonials = () => {
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [brandLogos, setBrandLogos] = useState<BrandLogoTypes[]>([]);
  const [, setCurrentNavigateState] = useAtom(navigateAtom);

  useEffect(() => {
    (async () => {
      setBrandLogos(await getBrandLogos());
    })();
  }, []);
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
      className={`flex flex-col items-center justify-center p-4 py-12  bg-[#EDF2F8] min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      id="testimonials"
      ref={sectionElementRef}
    >
      <div className="flex flex-col gap-12">
        <Carousel />
        <div className="grid grid-cols-[repeat(auto-fit,170px)] justify-center gap-4">
          {brandLogos.map(({ brandImage }, index) => (
            <img
              src={buildImageUrlFor(brandImage?.asset?._ref).url()}
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
