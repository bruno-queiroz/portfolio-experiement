import React from "react";
import {
  IoIosArrowBack as LeftArrowIcon,
  IoIosArrowForward as RightArrowIcon,
} from "react-icons/io";

const Testimonials = () => {
  return (
    <section>
      <div>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          earum consequatur atque sed possimus voluptates corporis ad neque
          magnam, rerum ipsum expedita, a, eveniet unde veritatis odio
          asperiores in nesciunt.
        </p>
        <div>
          <span>Michael</span>
          <span>Google</span>
        </div>
      </div>
      <div>
        <button type="button">
          <LeftArrowIcon />
        </button>
        <button type="button">
          <RightArrowIcon />
        </button>
      </div>

      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Testimonials;
