import { useEffect, useRef, useState } from "react";
import helloImg from "../assets/images/hello.svg";
import profile from "../assets/images/profile.png";
import { createObserver } from "../utils/intersectionObserver";

const Home = () => {
  const firstLazyLoadingElementRef = useRef<HTMLDivElement>(null);
  const secondLazyLoadingElementRef = useRef<HTMLDivElement>(null);
  const thirdLazyLoadingElementRef = useRef<HTMLDivElement>(null);

  const [isIntersectingFirstElement, setIsIntersectingFirstElement] =
    useState(false);
  const [isIntersectingSecondElement, setIsIntersectingSecondElement] =
    useState(false);
  const [isIntersectingThirdElement, setIsIntersectingThirdElement] =
    useState(false);

  const handleHomeIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "first-lazy-loading-element") {
        setIsIntersectingFirstElement(true);
        return;
      }
      if (entry.target.id === "second-lazy-loading-element") {
        setIsIntersectingSecondElement(true);
        return;
      }
      setIsIntersectingThirdElement(true);
      return;
    }
    if (entry.target.id === "first-lazy-loading-element") {
      setIsIntersectingFirstElement(false);
      return;
    }
    if (entry.target.id === "second-lazy-loading-element") {
      setIsIntersectingSecondElement(false);
      return;
    }
    setIsIntersectingThirdElement(false);
  };

  useEffect(() => {
    const clearObservers = createObserver(handleHomeIntersection, [
      firstLazyLoadingElementRef.current!,
      secondLazyLoadingElementRef.current!,
      thirdLazyLoadingElementRef.current!,
    ]);
    return () => clearObservers();
  }, []);
  return (
    <main className="flex flex-col p-6 pb-0 pt-[150px] bg-[#EDF2F8] xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-4 min-h-[100vh] main-background-image">
      <div
        className="pl-4 sm:pl-[8rem] xl:pl-0 mt-4 xl:justify-self-end xl:h-[max-content]"
        id="first-lazy-loading-element"
        ref={firstLazyLoadingElementRef}
      >
        <div
          className={`py-4 px-10 rounded bg-white w-[max-content] shadow-lg transition-all duration-300 ${
            isIntersectingFirstElement
              ? "translate-x-0 opacity-100"
              : "translate-x-[-100px] bg-transparent opacity-0"
          } `}
        >
          <h1 className="flex gap-4 ">
            <img src={helloImg} alt="" className="w-[50px]" />
            <div className="flex gap-2 flex-col">
              <span>Hello I am</span>
              <span className="font-bold text-4xl">Micael</span>
            </div>
          </h1>
        </div>
        <div
          className={`py-4 px-6 bg-white rounded flex flex-col gap-2 w-[max-content] mt-8 transition-all duration-500 ${
            isIntersectingFirstElement
              ? "translate-x-0 opacity-100"
              : "translate-x-[-100px] opacity-0"
          }`}
        >
          <strong className="font-medium text-gray-500">WEB DEVELOPER</strong>
          <strong className="font-medium text-gray-500">FREELANCER</strong>
        </div>
      </div>
      <div className="mt-8 mb-16 xl:mb-0 relative">
        <div
          className={`absolute w-full max-w-[566px] lg:max-w-[735px] aspect-square rounded-[50%] bg-gradient-to-r from-[#EDF2F8] to-gray-300 z-[1] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-40%] transition-transform duration-500 ${
            isIntersectingSecondElement ? "scale-100" : "scale-0"
          }`}
          id="second-lazy-loading-element"
          ref={secondLazyLoadingElementRef}
        />
        <img
          src={profile}
          alt=""
          className="mx-auto lg:w-[735px] mt-[inherit] relative z-10"
        />
      </div>
      <div
        className={`flex justify-center mt-4 mx-auto w-[350px] h-[270px] relative sm:w-[60%] xl:w-full xl:h-full transition-transform duration-500 ${
          isIntersectingThirdElement ? "scale-100" : "scale-0"
        }`}
        ref={thirdLazyLoadingElementRef}
      >
        <div className="flex justify-center items-center w-[110px] h-[110px] rounded-[50%] bg-white shadow-lg absolute top-0 left-0 xl:left-2 xl:top-24 ">
          <div className="w-[50px] h-[50px] rounded-[50%] flutter-bg-image" />
        </div>
        <div className="flex justify-center items-center w-[150px] h-[150px] rounded-[50%] bg-white shadow-lg absolute top-3 right-0 sm:left-[50%] sm:translate-x-[-50%] xl:top-[50%] xl:left-5 xl:sm:translate-x-0 xl:translate-y-[-50%]">
          <div className="w-[85px] h-[85px] rounded-[50%] redux-bg-image" />
        </div>
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[50%] bg-white shadow-lg absolute bottom-0 sm:top-0 sm:right-0 xl:top-[80%] xl:left-0">
          <div className="w-[50px] h-[50px] rounded-[50%] sass-bg-image m-auto" />
        </div>
      </div>
    </main>
  );
};

export default Home;
