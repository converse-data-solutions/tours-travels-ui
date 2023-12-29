import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LargeScreenDropdown } from "./LargeScreenDropDown";
import { HomeDropDown } from "./HomePageDropDown";

import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Poppins } from "next/font/google";

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { SlCalender, SlClock, SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const HomePage = () => {
  return (
    <>
      <div>
        <div className="hidden lg:block">
          <div
            className="h-[4.2vh] bg-[#029e9d] shadow-md flex  text-white items-center text-sm xl:px-[16%] lg:px-[10%] justify-between "
            style={poppins.style}
          >
            <div className="flex  gap-4 ">
              <div className="border-r-[1px] border-[#f1f1f136] pr-4 ">
                <div className="flex flex-row gap-2">
                  {" "}
                  <SlCalender className="mt-1" />{" "}
                  <div>
                    <span>Sunday, Mar 26, 2021</span>
                  </div>
                </div>
              </div>
              <div className="border-r-[1px] border-[#f1f1f136] pr-4 ">
                <div className="flex flex-row gap-2">
                  {" "}
                  <SlLocationPin className="mt-1" />{" "}
                  <div>
                    <span>Hollywood, America</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-2">
                  {" "}
                  <FaRegClock className="mt-1" />
                  <div> Mon-Fri:10 AM-5 PM</div>
                </div>
              </div>
            </div>

            <div className="xl:pl-[15%] h-[4.2vh] items-center flex ">
              <div className="border-r-[1px] border-[#f1f1f136] py-[2%] pr-5">
                <FaFacebook />
              </div>
              <div className="border-r-[1px] border-[#f1f1f136] ">
                <FontAwesomeIcon icon={faTwitter} className="   pr-5 pl-5" />
              </div>
              <div className="border-r-[1px] border-[#f1f1f136] ">
                {" "}
                <FontAwesomeIcon icon={faInstagram} className="   pr-5 pl-5" />
              </div>
              <div className="pl-5 ">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[11vh] bg-white lg:px-4 py-6 h-[93px] z-50">
          <div className="">
            <LargeScreenDropdown />
            <span className="z-50 ">
              <HomeDropDown />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
