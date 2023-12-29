import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
  weight:'600'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const SpecialOffersHeading = () => {
  return (
    <div className="">
      <br></br>
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-[#FDC703] text-[22px] font-serif font-bold lg:text-2xl"
          style={playFair.style}
        >
          Top Offers
        </div>
        <div className="lg:px-[15%] text-center">
          <span
            className="text-black text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-bold"
            style={playFair.style}
          >
            Special
          </span>
          <span
            className="text-[#029e9d] text-[28px]  lg:text-[46px] font-serif font-bold pr-2 "
            style={playFair.style}
          >
            Offers & Discount
          </span>

          <span
            className="text-black text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-bold lg:font-semibold"
            style={playFair.style}
          >
            Packages
          </span>
        </div>

        <div
          className="text-[#777777] text-[16px] font-serif px-5 md:px-20 items-center text-center"
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

export default SpecialOffersHeading;
