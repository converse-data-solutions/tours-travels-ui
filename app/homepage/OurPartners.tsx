import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PackageSlider from "./OurPartnersSlider";

const PartnersHeading = () => {
  return (
    <div className=" bg-white">
      <div className="  w-full h-[400px] flex flex-row bg-white relative top-[100px] p">
        <div className="md:w-2/12 "></div>
        <div className=" w-full md:w-8/12 flex flex-col items-center text-center">
          <div className=" text-yellow-400   text-[24px]">Our Partners</div>
          <div>
            <span className=" text-[46px] font-bold">Our Awesome</span>{" "}
            <span className="text-[46px] text-[#028B8A]  font-bold">
              Partners{" "}
            </span>
          </div>

          <div className="text-[18px]  text-center text-gray-500 ">
            <span className="flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </span>
          </div>
        </div>
        <div className="md:w-2/12 "></div>
      </div>

      <div className="xl:pl-[33vh] xl:pr-[20vh]   px-[10vh] md:px-[5vh]">
        <PackageSlider />
      </div>
    </div>
  );
};

export default PartnersHeading;
