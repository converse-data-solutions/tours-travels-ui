import React from "react";
import CountUpComponent from "../ClientComponets/CountUpComponent";

import { Playfair_Display, Poppins } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: "800",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const CountUpForGetToKnowUs = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-full justify-evenly py-4 ">
      <div className="pl-8 py-3 lg:py-0 ">
        <span
          className="text-[#029e9d] text-[50px] font-semibold "
          style={playFair.style}
        >
          <CountUpComponent end={20} duration={10} />
        </span>
        <p
          className="text-gray-500 text-[16px] lg:text-[18px]"
          style={poppins.style}
        >
          Years Experiences
        </p>
      </div>

      <div className="lg:border-l-2 pl-8 py-3 lg:py-0 ">
        <span
          className="text-[#029e9d] text-[50px] font-semibold"
          style={playFair.style}
        >
          <CountUpComponent end={344} duration={3} />
        </span>
        <p
          className="text-gray-500  text-[16px] lg:text-[18px]"
          style={poppins.style}
        >
          Tour Packages
        </p>
      </div>

      <div className="lg:border-l-2 pl-8 py-3 lg:py-0 ">
        <span
          className="text-[#029e9d] text-[50px] font-semibold"
          style={playFair.style}
        >
          <CountUpComponent end={850} duration={10} />
        </span>
        <p
          className="text-gray-500  text-[16px] lg:text-[18px]"
          style={poppins.style}
        >
          Happy Customers
        </p>
      </div>

      <div className="lg:border-l-2 pl-8 py-3 lg:py-0 ">
        <span
          className="text-[#029e9d] text-[50px] font-semibold"
          style={playFair.style}
        >
          <CountUpComponent end={320} duration={3} />
        </span>
        <p
          className="text-gray-500  text-[16px] lg:text-[18px]"
          style={poppins.style}
        >
          Award Winning
        </p>
      </div>
    </div>
  );
};

export default CountUpForGetToKnowUs;
