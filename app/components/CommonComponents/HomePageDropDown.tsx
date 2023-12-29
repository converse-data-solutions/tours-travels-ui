"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import travelinImage from "../../../public/travelin img.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { FaTimes } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const HomeDropDown = () => {
  const [isPageDetailsVisible, setIsPageDetailsVisible] = useState(false);
  const [istourbuttonstVisible, setIsTourbuttonstVisible] = useState(false);
  const [istourGridVisible, setIsTourGridVisible] = useState(false);
  const [istourSingleVisible, setIsTourSingleVisible] = useState(false);
  const [ispageHover, setIsPageHover] = useState(false);
  const [isvisible, setIsVisible] = useState(false);

  const pagebuttonstHover = () => {
    setIsPageDetailsVisible(!isPageDetailsVisible);
  };

  const tourbuttonstVisible = () => {
    setIsTourbuttonstVisible(!istourbuttonstVisible);
  };
  const tourGridVisible = () => {
    setIsTourGridVisible(!istourGridVisible);
  };
  const tourSingleVisible = () => {
    setIsTourSingleVisible(!istourSingleVisible);
  };
  const pageHover = () => {
    setIsPageHover(!ispageHover);
  };
  const visibleDropDown = () => {
    setIsVisible(!isvisible);
  };

  return (
    <>
      <div className="flex justify-between lg:hidden z-50 relative  px-3 text-[13px]">
        <div>
          <Image
            src={travelinImage}
            alt="Travelin"
            className="hover:cursor-pointer "
          />
        </div>

        <div className="flex justify-center items-center text-xl ">
          {" "}
          <button onClick={visibleDropDown}>
            {isvisible ? (
              <FaTimes className="font-bold " />
            ) : (
              <TfiMenu className="font-bold" />
            )}
          </button>
        </div>
      </div>
      {isvisible && (
        <div className="bg-[#1f1d26]  text-white dropdownbox overflow-y-scroll lg:hidden  mt-5 w-[100%]">
          <div className="lg:hidden ">
            <ul className=" homedropdown flex flex-col py-2 gap-3 hover:cursor-pointer homepage text-[#b6b3c4]">
              <button className="text-[13px] hover:bg-[#7b70a0]">
                HOME{" "}
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white text-[16px] font-bold pb-2"
                  style={poppins.style}
                />
              </button>
              <button className="text-[13px] hover:bg-[#7b70a0]">
                ABOUT US{" "}
              </button>
              <button className="text-[13px] hover:bg-[#7b70a0]">
                DESTINATIONS{" "}
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white text-[16px] font-bold pb-2"
                  style={poppins.style}
                />
              </button>
              <button
                onClick={pagebuttonstHover}
                className="text-[13px] hover:bg-[#7b70a0]"
              >
                TOURS{" "}
                <FontAwesomeIcon
                  icon={isPageDetailsVisible ? faMinus : faPlus}
                  className="text-white text-[16px] font-bold pb-2"
                  style={poppins.style}
                />
              </button>
              {isPageDetailsVisible && (
                <ul className="homedropdown text-[16px] pb-2 hover:bg-[#7b70a0]">
                  <li onClick={tourbuttonstVisible} className="text-[13px]">
                    TOUR LIST{" "}
                    <FontAwesomeIcon
                      icon={istourbuttonstVisible ? faMinus : faPlus}
                      className="pl-6 text-white text-[16px] font-bold"
                    />
                  </li>
                  {istourbuttonstVisible && (
                    <ul>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourList Leftsidebar
                      </li>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourList Rightsidebar
                      </li>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourList fullwidth
                      </li>
                    </ul>
                  )}

                  <li
                    onClick={tourGridVisible}
                    className="text-[13px] hover:bg-[#7b70a0]"
                  >
                    TOUR GRID{" "}
                    <span>
                      <FontAwesomeIcon
                        icon={istourGridVisible ? faMinus : faPlus}
                        className="pl-5  text-white text-[16px] font-bold"
                      />
                    </span>
                  </li>
                  {istourGridVisible && (
                    <ul>
                      {" "}
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourGrid Leftsidebar
                      </li>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourGrid Rightsidebar
                      </li>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourGrid fullwidth
                      </li>
                    </ul>
                  )}
                  <li onClick={tourSingleVisible} className="text-[13px]">
                    TOUR SINGLE
                    <span>
                      <FontAwesomeIcon
                        icon={istourSingleVisible ? faMinus : faPlus}
                        className="pl-5  text-white text-[16px] font-bold"
                      />
                    </span>
                  </li>
                  {istourSingleVisible && (
                    <ul>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourSingle Leftsidebar
                      </li>
                      <li className="text-[13px] hover:bg-[#7b70a0]">
                        TourSingle Rightsidebar
                      </li>
                      <li className="text-[13px]hover:bg-[#7b70a0]">
                        TourSingle fullwidth
                      </li>
                    </ul>
                  )}
                </ul>
              )}

              <button
                onClick={pageHover}
                className="text-[13px] hover:bg-[#7b70a0]"
              >
                PAGES{" "}
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white text-[16px] font-bold pb-2"
                />
              </button>
              {ispageHover && (
                <ul>
                  <li>ABOUT US</li>
                </ul>
              )}
              <button className="text-[13px] hover:bg-[#7b70a0]">
                BLOG{" "}
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white text-[16px] font-bold pb-2"
                />
              </button>
              <button onClick={() => window.location.replace("/search")}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="  text-[#7987a1;] md:inbuttonne-block"
                  style={{ height: "16px", width: "16px" }}
                />
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
