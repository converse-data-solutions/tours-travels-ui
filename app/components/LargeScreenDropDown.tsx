'use client'
import React, { useState } from "react";
import travelinImage from "../../public/travelin img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import SignInAndSignOut from "../SignInAndSignOut";
import Image from "next/image";
import Link from "next/link";

export const LargeScreenDropdown = () => {
  const [isPageDetailsVisible, setIsPageDetailsVisible] = useState(false);
  const [istourListVisible, setIsTourListVisible] = useState(false);
  const [istourGridVisible, setIsTourGridVisible] = useState(false);
  const [istourSingleVisible, setIsTourSingleVisible] = useState(false);
  const [ispageHover, setIsPageHover] = useState(false);
  const [isdropDown, setIsDropDown] = useState(false);
  const pageListHover = () => {
    setIsPageDetailsVisible(!isPageDetailsVisible);
  };

  const pageHover = () => {
    setIsPageHover(!ispageHover);
  };

  const hideDropdowns = () => {
    setIsPageDetailsVisible(false);
    setIsTourListVisible(false);
    setIsTourGridVisible(false);
    setIsTourSingleVisible(false);
    setIsPageHover(false);
  };
  const showPageDetails = () => {
    setIsPageDetailsVisible(true);
    setIsTourListVisible(false);
    setIsTourGridVisible(false);
    setIsTourSingleVisible(false);
    setIsPageHover(false);
  };
  const showPages = () => {
    setIsPageDetailsVisible(false);
    setIsTourListVisible(false);
    setIsTourGridVisible(false);
    setIsTourSingleVisible(false);
    setIsPageHover(true);
  };

  const setDropdownVisibility = (
    pageDetails: any,
    tourList: any,
    tourGrid: any,
    tourSingle: any,
    pageHover: any
  ) => {
    setIsPageDetailsVisible(pageDetails);
    setIsTourListVisible(tourList);
    setIsTourGridVisible(tourGrid);
    setIsTourSingleVisible(tourSingle);
    setIsPageHover(pageHover);
  };
  return (
    <div className="hidden lg:block " onMouseLeave={hideDropdowns}>
      <div className=" flex flex-wrap justify-between px-10">
        <div>
          <Image
            src={travelinImage}
            alt="Travelin"
            className="hover:cursor-pointer "
          />
        </div>
        <div>
          <div className="flex justify-around">
            <div className="">
              <div className="  flex flex-wrap py-5 gap-3 text-slate-600 hover:cursor-pointer homepage">
                <li>
                  HOME <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>ABOUT US</li>
                <li>
                  DESTINATIONS <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li onClick={pageListHover} onMouseOver={showPageDetails}>
                  TOURS <FontAwesomeIcon icon={faChevronDown} />
                </li>

                <li onClick={pageHover} onMouseOver={showPages}>
                  PAGES <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>
                  BLOG <FontAwesomeIcon icon={faChevronDown} />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="  text-[#7987a1;] md:inline-block"
                    style={{ height: "16px", width: "16px" }}
                    onClick={()=>window.location.replace("/search")}
                  />
                </li>
              </div>
              {isPageDetailsVisible && (
                <ul className="z-10 mt-10 mx-0  bg-white rounded-lg shadow-md dropdown w-max">
                  <li
                    className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200 "
                    onMouseOver={() =>
                      setDropdownVisibility(true, true, false, false, false)
                    }
                  >
                    Tour List{" "}
                    <FontAwesomeIcon icon={faAngleRight} className="pl-6" />
                  </li>

                  <li
                    className=" pr-2 py-3 border-b-[1px] border-dashed border-gray-200"
                    onMouseOver={() =>
                      setDropdownVisibility(true, false, true, false, false)
                    }
                  >
                    Tour Grid{" "}
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} className="pl-5" />
                    </span>
                  </li>
                  <li
                    className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200"
                    onMouseOver={() =>
                      setDropdownVisibility(true, false, false, true, false)
                    }
                  >
                    Tour Single
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} className=" pl-3" />
                    </span>
                  </li>
                </ul>
              )}
              {istourListVisible && (
                <ul className=" z-20 mt-10 bg-white rounded-lg shadow-md dropdown1 w-max">
                  <li className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200 ">
                    TourList Leftsidebar
                  </li>
                  <li className=" pr-2 py-3 border-b-[1px] border-dashed border-gray-200">
                    TourList Rightsidebar
                  </li>
                  <li className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200">
                    TourList fullwidth
                  </li>
                </ul>
              )}
              {istourGridVisible && (
                <ul className=" z-20 mt-10 bg-white rounded-lg shadow-md dropdown2 w-max">
                  <li className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200 ">
                    TourGrid Leftsidebar
                  </li>
                  <li className=" pr-2 py-3 border-b-[1px] border-dashed border-gray-200">
                    TourGrid Rightsidebar
                  </li>
                  <li className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200">
                    TourGrid fullwidth
                  </li>
                </ul>
              )}
              {istourSingleVisible && (
                <ul className=" z-20 mt-10 bg-white rounded-lg shadow-md dropdown3 w-max">
                  <li className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200 ">
                    TourSingle Leftsidebar
                  </li>
                  <li className=" pr-2 py-3 border-b-[1px] border-dashed border-gray-200">
                    TourSingle Rightsidebar
                  </li>
                  <li className="pr-2 py-3 border-b-[1px] border-dashed border-gray-200">
                    TourSingle fullwidth
                  </li>
                </ul>
              )}
              {ispageHover && (
                <ul className="z-10 mt-10 bg-white rounded-lg shadow-md dropdown4 w-max">
                  <li className="pr-2 py-3 ">
                    About Us{" "}
                    <FontAwesomeIcon icon={faAngleRight} className="pl-3" />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[hsl(180,82%,35%)] px-5 py-3 border rounded-lg hover:bg-yellow-400 sm:text-sm lg:text-lg text-white" >
            <SignInAndSignOut />
          </button>
        </div>
      </div>
    </div>
  );
};
