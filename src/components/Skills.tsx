import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";

import { experienceData, TechnologiesData } from "../../public/portifolioData";
import { navigateAtom } from "../App";
import { SanityResultDefaultTypes } from "../fetch/config";
import { getExperience } from "../fetch/getExperience";
import { getTechnologySticker } from "../fetch/getTechnologySticker";
import { createObserver } from "../utils/intersectionObserver";
import CareerTimeline from "./CareerTimeline";
import TechnologySticker from "./TechnologySticker";

interface TechnologyStickerData {
  technologyName: string;
  technologyImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export type TechnologyStickerTypes = TechnologyStickerData &
  SanityResultDefaultTypes;

interface Job {
  role: string;
  company: string;
}

type JobTypes = SanityResultDefaultTypes & Job;

interface CareerTimelineData {
  year: string;
  jobs: JobTypes[];
}

export type CareerTimelineTypes = CareerTimelineData & SanityResultDefaultTypes;

const Skill = () => {
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [careerTimeline, setCareerTimeline] = useState<CareerTimelineTypes[]>(
    []
  );
  const [technologyStickers, setTechnologyStickers] = useState<
    TechnologyStickerTypes[]
  >([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [, setCurrentNavigateState] = useAtom(navigateAtom);

  useEffect(() => {
    (async () => {
      setCareerTimeline(await getExperience());
      setTechnologyStickers(await getTechnologySticker());
    })();
  }, []);

  const handleSkillIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setCurrentNavigateState("skills");
    }
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const clearIntersection = createObserver(
      handleSkillIntersection,
      [sectionElementRef.current!],
      "-100px"
    );
    return () => {
      clearIntersection();
    };
  }, []);
  return (
    <section
      className={`flex flex-col justify-center gap-4 p-4 py-12 min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      id="skills"
      ref={sectionElementRef}
    >
      <h2 className="text-4xl md:text-5xl text-center font-semibold py-12">
        Skills & Experience
      </h2>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:max-w-[800px] lg:mx-auto">
        <div className="flex gap-6 flex-wrap justify-center w-full">
          {technologyStickers?.map((technology, index) => (
            <TechnologySticker key={index} {...technology} />
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:items-center">
          {careerTimeline?.map((experience, index) => (
            <CareerTimeline key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
