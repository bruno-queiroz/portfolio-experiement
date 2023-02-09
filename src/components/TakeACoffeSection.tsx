import React from "react";

const TakeACoffeSection = () => {
  return (
    <section>
      <h2>Take A Coffe & Chat With Me</h2>

      <div>
        <div>
          <img src="" alt="" />
          <a href="tel: +1 (123) 456-789">+1 (123) 456-789</a>
        </div>
        <div>
          <img src="" alt="" />
          <a href="mailto:hello@micael.com"></a>
        </div>
      </div>

      <form>
        <input type="text" placeholder="Your name" aria-label="your-name" />
        <input type="email" placeholder="Your email" aria-label="your-email" />
        <textarea
          aria-label="your-message"
          placeholder="Your message"
        ></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
};

export default TakeACoffeSection;
