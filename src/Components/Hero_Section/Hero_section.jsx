import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero_section = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        effect="fade"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
        pagination={{
          clickable: true
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1757386117955-c491ad384a26?w=800&auto=format&fit=crop&q=60"
            alt="Slide 1"
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold mb-2 tracking-wide ">Welcome to Our Site!</h1>
            <p className="text-lg mb-6">
              We offer amazing products and services.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1757386117955-c491ad384a26?w=800&auto=format&fit=crop&q=60"
            alt="Slide 2"
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold mb-2"><mark className="bg-accent p-2 rounded-md" >Quality</mark> and Innovation</h1>
            <p className="text-lg mb-6">
              Experience the future of technology with us.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1757386117955-c491ad384a26?w=800&auto=format&fit=crop&q=60"
            alt="Slide 3"
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold mb-2">Join Our Community</h1>
            <p className="text-lg mb-6">
              Be part of a vibrant and <span className="text-accent text-5xl"></span> growing network.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Sign Up
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ✅ Custom Navigation Buttons */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-4xl hover:text-blue-400 transition">
        <FaChevronLeft />
      </div>
      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-4xl hover:text-blue-400 transition">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Hero_section;
