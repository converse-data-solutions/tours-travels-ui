import React, { CSSProperties } from "react";
import { Poppins } from "next/font/google";
import {
  BusinessCenterOutlined,
  FolderOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Playfair_Display } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const GetToKnowUsContent: React.FC = () => {
  return (
    <div className="px-5 bg-white md:px-10 lg:px-8">
      <div
        className="text-[24px] text-[#029e9d] text-center lg:text-start font-serif font-semibold"
        style={playFair.style}
      >
        Get To Know Us
      </div>

      <div
        className="text-[30px] lg:text-[46px] text-[#17233e]   lg:text-start font-serif  font-bold text-center"
        style={playFair.style}
      >
        Explore All Tour Of The World With Us.
      </div>

      <hr className="border border-dashed border-[#f1f1f1]"></hr>
      <br></br>

      <div
        style={poppins.style}
        className="text-[16px] text-center lg:text-start text-[#777777]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <br></br>
      <div
        className="text-[16px] text-center lg:text-start text-[#777777]"
        style={poppins.style}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <br></br>
      <hr className="border border-dashed border-[#f1f1f1]"></hr>
      <br></br>
      <div className="flex text-center text-[16px] flex-col md:flex-row md:hidden pb-5">
        <div className="flex justify-center text-[#777777]">
          <div className="flex " style={poppins.style}>
            <LocationOnOutlined className="text-[#029e9d] " />
            Tour Guide
          </div>
          <div style={poppins.style}>
            <BusinessCenterOutlined className="text-[#029e9d] pr-1" />
            Friendly Price
          </div>
        </div>
        <div
          className="flex justify-center pt-2 text-[#777777]"
          style={poppins.style}
        >
          <FolderOutlined className="text-[#029e9d] pr-1" />
          Reliable Tour Package
        </div>
      </div>

      <div className="hidden md:flex text-center text-[16px] justify-between ">
        <div className=" " style={{ ...poppins.style }}>
          <LocationOnOutlined className="text-[#029e9d] " />
          <span className="text-[16px] text-[#777777]" style={poppins.style}>
            Tour Guide
          </span>
        </div>
        <div style={{ ...poppins.style }}>
          <BusinessCenterOutlined className="text-[#029e9d] pr-1" />
          <span className="text-[16px] text-[#777777]" style={poppins.style}>
            {" "}
            Friendly Price
          </span>
        </div>

        <div style={{ ...poppins.style }}>
          <FolderOutlined className="text-[#029e9d] pr-1" />
          <span className="text-[16px] text-[#777777]" style={poppins.style}>
            Reliable Tour Package
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetToKnowUsContent;
