import React from "react";

interface CareerTimelineProps {
  date: number;
  jobs: {
    role: string;
    company: string;
  }[];
}

const CareerTimeline = ({ date, jobs }: CareerTimelineProps) => {
  return (
    <div className="flex gap-6">
      <div>
        <span className="text-blue-700 font-semibold">{date}</span>
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
