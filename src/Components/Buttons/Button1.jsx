import React from "react";

const Button1 = ({ children, Icon, className = "" }) => {
  return (
    <button
      className={`group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 overflow-hidden ${className}`}
    >
      {/* Button Text */}
      <span className="z-10 pr-2">{children}</span>

      {/* Animated Icon Background */}
      <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white/10 transition-[width] duration-500 group-hover:w-[calc(100%-8px)]">
        <div className="mr-3.5 flex items-center justify-center">
          {Icon && <Icon className="h-5 w-5 text-neutral-50" />}
        </div>
      </div>
    </button>
  );
};

export default Button1;
