import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoPart = () => {
  return (
    <div className="bg-white  xl:h-full">
      <div className="Videopart pt-[50px] lg:pt-[130px] lg:h-[600px] w-full h-[600px] flex flex-row bg-white">
        <div className="lg:w-2/12 "></div>
        <div className=" w-12/12 lg:w-8/12 flex flex-col items-center">
          <div className="text-[#028B8A]  text-[20px]">
            Love Where Your're Going
          </div>

          <div className="block  md:hidden text-center">
            <span className="hover:text-[#028B8A] font-bold text-[22px]">
              Explore Your Life,
            </span>
            <span className=" text-yellow-400 font-bold text-[22px]">
              Travel
            </span>
          </div>
          <div className="block md:hidden text-yellow-400 font-bold text-center text-[22px] pb-3">
            {" "}
            Where You Want!
          </div>

          <div className="flex">
            <span className="hidden md:block  hover:text-[#028B8A] text-[46px] lg:text-[40px] md:text-[36px] sm:text-[32px] font-bold">
              Explore Your Life,
            </span>{" "}
            <span className="hidden md:inline-block text-[46px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-yellow-400 font-bold">
              Travel Where You{" "}
            </span>
          </div>
          <div className=" hidden md:inline-block text-[44px] text-yellow-400 font-bold">
            Want!
          </div>

          <div className="text-[18px] lg:px-20  md:px-16 text-center text-gray-500 ">
            <span className="flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <div className="mt-24">
              {" "}
              <div>
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white text-3xl bg-[#028B8A] px-[22px] py-[18px] rounded-[50%]"
                />
              </div>
            </div>
            <div className="spinner-wrap text-center relative top-[-58px] ">
              <div className="spinner-item"></div>
              <div className="spinner-item spinner-item--2"></div>
              <div className="spinner-item spinner-item--3"></div>
            </div>
          </div>
        </div>
        <div className="  lg:w-2/12 "></div>
      </div>
    </div>
  );
};

export default VideoPart;
