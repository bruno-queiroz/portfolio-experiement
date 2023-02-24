import React from "react";
import { CareerTimelineTypes } from "./Skills";

const CareerTimeline = ({ year, jobs }: CareerTimelineTypes) => {
  return (
    <div className="flex gap-6">
      <div>
        <span className="text-blue-700 font-semibold">{year}</span>
      </div>
      <div className="flex flex-col gap-3">
        {jobs.map(({ company, role }, index) => (
          <div className="flex flex-col gap-1" key={index}>
            <span>{role}</span>
            <span className="text-gray-600">{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
