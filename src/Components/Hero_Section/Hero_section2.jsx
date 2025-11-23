import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button1 from "../Buttons/Button1";
import ScrollVelocity from "./ScrollVelocity";

const HeroSection = () => {

  const velocity = 100;

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center relative px-4 sm:px-6 lg:px-8 flex items-center"
        style={{ backgroundImage: "url('src/assets/images/bgimg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white mb-6 leading-tight uppercase flex flex-wrap items-center justify-center lg:justify-start gap-4">
              cheerfol
              <span className="relative inline-block bg-accent px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-dashed text-black text-3xl text-center">
                <span className="block -translate-y-1">Beast</span>
                <span className="block translate-y-1">Design</span>
              </span>
              with creative
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto lg:mx-0 capitalize">
              a small, explanatory text accompanying an image, form element, or diagram, often in a smaller font size than the main text. Alternatively, a "web design caption" could be a quote about the principles and philosophy of web design, such as those emphasizing that design is about function as much as aesthetics, or that a website's success hinges on attracting and guiding the right visitors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button1 className="uppercase" Icon={FaArrowRight}>
                Get Started
              </Button1>
            </div>
          </div>
        </div>
      </div>
      <ScrollVelocity
        texts={['Creative Solutions', 'Creative Design']}
        velocity={velocity}
        className="custom-scroll-text py-2"
      />
    </>
  );
};

export default HeroSection;
