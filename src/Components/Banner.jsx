import React from "react";

const Banner = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <p
        className="mt-16 sm:mt-20 lg:mt-[80px] text-center font-bold leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-[72px]"
      >
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </p>

      {/* Description */}
      <p className="mt-4 text-center text-sm sm:text-base md:text-lg text-[#627382]  mx-auto leading-relaxed">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br className="hidden sm:block" />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
    </div>
  );
};

export default Banner;
