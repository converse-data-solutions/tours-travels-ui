import React from "react";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";

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
          className="text-[#FDC703] text-[22px] font-serif  lg:text-2xl font-semibold"
          style={{ ...playFair.style }}
        >
          Top Destinations
        </div>
        <div className="lg:px-[15%] text-center">
          <span
            className="text-black text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-semibold lg:font-semibold"
            style={{ ...playFair.style }}
          >
            Explore
          </span>
          <span
            className="text-[#028B8A] text-[28px]  lg:text-[46px] font-serif font-semibold "
            style={{ ...playFair.style }}
          >
            Top Destinations
          </span>
        </div>
        <div
          className="text-[#777777] text-[16px] font-serif px-10 md:px-20 items-center text-center xl:px-[20%]"
          style={{ ...poppins.style }}
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
