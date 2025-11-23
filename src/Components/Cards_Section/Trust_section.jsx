import React from "react";
import ScrollReveal from './ScrollReveal';
import { FaStarOfLife } from "react-icons/fa6";


const logos = [
  "https://htmlwind.com/assets/images/logo/logoipsum-214.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-221.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-216.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-317.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-284.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-311.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-288.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-263.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-220.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-211.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-329.svg",
  "https://htmlwind.com/assets/images/logo/logoipsum-325.svg",
];

const LogoGrid = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-25 uppercase leading-loose tracking-widest text-gray-900 sm:px-0">
          <span className="underline underline-offset-8 p-2 rounded-md decoration-dashed text-accent">Trusted</span> by companies across the <span className="p-4 bg-black/10 rounded-full border-2 border-dashed">globe</span>
        </h2>

        {/* Logos Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 overflow-hidden rounded-2xl">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center bg-gray-100 p-8 rounded-lg overflow-hidden"
            >
              {/* Default logo */}
              <img
                className="max-h-12 w-full object-contain transition-transform duration-800 translate-y-0 group-hover:-translate-y-[400%]"
                src={logo}
                alt={`Company logo ${index + 1}`}
              />
              {/* Hover logo (can be same as default, or you can replace with a colored version) */}
              <img
                className="absolute max-h-12 w-full object-contain transition-transform duration-800 translate-y-[400%] group-hover:translate-y-0"
                src={logo}
                alt={`Company logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-15 text-5xl leading-20 font-semibold uppercase lg:text-justify">
  When does a man die? <FaStarOfLife className="inline mx-1 bg-accent text-7xl p-5 rounded-full" /> When he is hit by a bullet? No! When he suffers a disease? No! When he ate a soup made out of a <span><img src="https://images.unsplash.com/photo-1759392658577-4324fb89b991?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-50 h-20 rounded-full inline mx-1 object-cover " /></span> poisonous mushroom? No! A man dies when he is forgotten!
</div>

      </div>
    </section>
  );
};

export default LogoGrid;
