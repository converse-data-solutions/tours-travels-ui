import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
  variable: "--poppins",
});
const LastMinuteDeals = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-[#FDC703] text-[22px] font-serif font-bold pt-10 lg:pt-4"
          style={playFair.style}
        >
          Top Deals
        </div>
        <div className="lg:px-[15%] text-center">
          <span
            className="text-[#17233e] text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-bold"
            style={playFair.style}
          >
            The Last
          </span>
          <span
            className="text-[#029e9d] text-[28px]  lg:text-[46px] font-serif font-bold "
            style={playFair.style}
          >
            Minute Deals
          </span>
        </div>
        <div
          className="text-[#777777] text-[16px] font-serif px-5 md:px-20  text-center"
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

export default LastMinuteDeals;
