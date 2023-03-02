import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { navigateAtom } from "../App";

import emailImg from "../assets/images/email.png";
import mobileImg from "../assets/images/mobile.png";
import { createObserver } from "../utils/intersectionObserver";

const TakeACoffeSection = () => {
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [, setCurrentNavigateState] = useAtom(navigateAtom);

  const handleTakeACoffeeIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setCurrentNavigateState("contact");
    }
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const clearIntersection = createObserver(
      handleTakeACoffeeIntersection,
      [sectionElementRef.current!],
      "-100px"
    );
    return () => {
      clearIntersection();
    };
  }, []);
  return (
    <section
      className={`flex items-center bg-white py-12 px-4 min-h-[100vh] transition-all duration-700 ${
        isIntersecting
          ? "translate-y-0 opacity-1"
          : "translate-y-[80px] opacity-0"
      }`}
      id="contact"
      ref={sectionElementRef}
    >
      <div className="max-w-[700px] w-full mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-24">
          Take A Coffe & Chat With Me
        </h2>

        <div className="flex flex-col gap-4 items-center text-gray-600">
          <div className="flex gap-4 items-center py-4 px-6 bg-[#EDF2F8] max-w-[500px] w-full">
            <img src={mobileImg} alt="" className="w-[40px] h-[40px]" />
            <a href="tel: +1 (123) 456-789">+1 (123) 456-789</a>
          </div>
          <div className="flex gap-4 items-center py-4 px-6 bg-[#EDF2F8] max-w-[500px] w-full">
            <img src={emailImg} alt="" className="w-[40px] h-[40px]" />
            <a href="mailto:hello@micael.com">hello@micael.com</a>
          </div>
        </div>

        <form className="flex flex-col gap-4 mt-20">
          <input
            type="text"
            placeholder="Your name"
            aria-label="your name"
            className="bg-[#EDF2F8] p-3"
          />
          <input
            type="email"
            placeholder="Your email"
            aria-label="your email"
            className="bg-[#EDF2F8] p-3"
          />
          <textarea
            aria-label="your message"
            placeholder="Your message"
            className="bg-[#EDF2F8] p-3"
          ></textarea>
          <button className="bg-blue-700 py-3 px-4 rounded text-white mx-auto mt-4 w-[max-content]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default TakeACoffeSection;
