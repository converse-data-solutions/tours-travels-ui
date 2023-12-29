import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const TravelPerfection = () => {
  return (
    <div className="">
      <br></br>
      <div className="flex flex-col items-center justify-center bg-white">
        <div
          className="text-[#FDC703] text-[22px] font-bold"
          style={playFair.style}
        >
          Core Feautures
        </div>
        <div className="lg:px-[15%] text-center">
          <span className="text-[#17233e] text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-semibold lg:font-bold">
            Find
          </span>
          <span className="text-[#029e9d] text-[28px]  lg:text-[46px] font-serif font-semibold ">
            Travel Perfection
          </span>
        </div>
        <div
          className="text-[#777777] text-[16px] lg:text-[18px] font-serif px-8 md:px-10 items-center text-center xl:px-[18%]"
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

export default TravelPerfection;
