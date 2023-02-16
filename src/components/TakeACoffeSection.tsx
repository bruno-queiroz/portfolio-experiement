import React from "react";

import emailImg from "../assets/images/email.png";
import mobileImg from "../assets/images/mobile.png";

const TakeACoffeSection = () => {
  return (
    <section className="bg-white py-20 px-4">
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
