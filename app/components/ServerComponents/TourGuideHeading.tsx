import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const TourGuidesHeading = () => {
  return (
    <div className="">
      <br></br>
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-[#FDC703] text-[22px] font-serif font-bold lg:text-2xl"
          style={playFair.style}
        >
          Tour Guides
        </div>
        <div className="lg:px-[15%] text-center">
          <span
            className="text-black text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-bold "
            style={playFair.style}
          >
            Meet Our
          </span>
          <span
            className="text-[#028B8A] text-[28px]  lg:text-[46px] font-serif font-bold "
            style={playFair.style}
          >
            Excellent Guides
          </span>
        </div>
        <div
          className="text-[#777777] text-[18px] font-serif px-8 md:px-20 items-center text-center"
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

export default TourGuidesHeading;
