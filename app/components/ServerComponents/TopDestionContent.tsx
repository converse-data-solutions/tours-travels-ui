import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const TopDestinations = () => {
  return (
    <div className=" ">
      <br></br>
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-[#FDC703] text-[22px]  lg:text-2xl font-semibold"
          style={playFair.style}
        >
          Top Destinations
        </div>
        <div className="lg:px-[15%] text-center">
          <span
            className="text-[#17233e] text-[28px] lg:text-[46px]  pr-2 lg:pr-4 font-semibold lg:font-semibold"
            style={playFair.style}
          >
            Explore
          </span>
          <span
            className="text-[#029e9d] text-[28px]  lg:text-[46px]  font-semibold "
            style={playFair.style}
          >
            Top Destinations
          </span>
        </div>
        <div
          className="text-[#777777] text-[16px]  px-5 md:px-20  text-center xl:px-[20%]"
          style={poppins.style}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default TopDestinations;
