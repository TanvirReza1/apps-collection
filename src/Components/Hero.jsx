import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import hero from "../assets/hero.png";
import TopApp from "../Pages/Home/TopApp";

const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Google Play */}
        <a
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl 
        hover:transition duration-300 shadow-md hover:scale-105"
        >
          <IoLogoGooglePlaystore className="text-2xl text-green-500" />
          <div className="text-left leading-tight">
            <p className="text-sm font-semibold">Google Play</p>
          </div>
        </a>

        {/* App Store */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl
        hover:transition duration-300 shadow-md hover:scale-105"
        >
          <FaApple className="text-2xl bg-gradient-to-b from-[#00BFFC] to-[#0073F6]" />
          <div className="text-left leading-tight">
            <p className="text-sm font-semibold">App Store</p>
          </div>
        </a>
      </div>
      <div className=" mt-[40px] ">
        <img src={hero} alt="Hero image" />
      </div>
      <section className="w-full bg-gradient-to-t from-[#632EE3] to-[#9F62F2] py-16 px-4">
        {/* Heading */}
        <h2
          className="text-center text-white font-bold 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div
          className="mt-12 max-w-6xl mx-auto grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white"
        >
          {/* Card 1 */}
          <div className="text-center">
            <p className="text-sm opacity-80">Total Downloads</p>
            <h3 className="text-4xl sm:text-5xl font-bold mt-2">29.6M</h3>
            <p className="text-sm opacity-70 mt-2">21% More Than Last Month</p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <p className="text-sm opacity-80">Total Reviews</p>
            <h3 className="text-4xl sm:text-5xl font-bold mt-2">906K</h3>
            <p className="text-sm opacity-70 mt-2">46% More Than Last Month</p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <p className="text-sm opacity-80">Active Apps</p>
            <h3 className="text-4xl sm:text-5xl font-bold mt-2">132+</h3>
            <p className="text-sm opacity-70 mt-2">31 More Will Launch</p>
          </div>
        </div>
      </section>
      <TopApp></TopApp>
    </div>
  );
};

export default Hero;
