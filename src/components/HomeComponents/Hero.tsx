import React from "react";
import SearchInput from "../common/SearchInput";
import Navbar from "./Navbar";
const Hero = (): JSX.Element => {
  return (
    <div className="h-hero bg-hero bg-no-repeat bg-cover bg-center">
      <Navbar />
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center">
          <SearchInput />
        </div>
        <div className="flex flex-col mt-40 ml-28">
          <h1 className="text-white text-5xl font-semibold max-w-header leading-11">
            Not sure where to go? Perfect.
          </h1>
          <button className="bg-white px-8 py-4 text-black font-regular text-2xl rounded-20 w-max mt-12 hover:scale-105 transition-transform duration-300">
            Inspire Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
