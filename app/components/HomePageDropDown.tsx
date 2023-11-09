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

import travelinImage from "../../public/travelin img.png"

import SignInAndSignOut from "../SignInAndSignOut";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex justify-between lg:hidden">
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
            <FontAwesomeIcon icon={isvisible ? faXmark : faBars} />
          </button>
        </div>
        <div>
          <button className="bg-[hsl(180,82%,35%)] px-5 py-3 border rounded-lg hover:bg-yellow-400 sm:text-sm lg:text-lg text-white">
            <SignInAndSignOut />
          </button>
        </div>
      </div>
      {isvisible && (
        <div className="bg-black z-10 text-white dropdownbox lg:hidden w-screen ">
          <div className="lg:hidden ">
            <ul className=" homedropdown flex flex-col py-5 gap-3 text-slate-600 hover:cursor-pointer homepage">
              <button>
                HOME <FontAwesomeIcon icon={faPlus} />
              </button>
              <button>
                ABOUT US <FontAwesomeIcon icon={faPlus} />{" "}
              </button>
              <button>
                DESTINATIONS <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={pagebuttonstHover}>
                TOURS{" "}
                <FontAwesomeIcon
                  icon={isPageDetailsVisible ? faMinus : faPlus}
                />
              </button>
              {isPageDetailsVisible && (
                <ul className="homedropdown">
                  <li onClick={tourbuttonstVisible}>
                    Tour List{" "}
                    <FontAwesomeIcon
                      icon={istourbuttonstVisible ? faMinus : faPlus}
                      className="pl-6"
                    />
                  </li>
                  {istourbuttonstVisible && (
                    <ul>
                      <li>TourList Leftsidebar</li>
                      <li>TourList Rightsidebar</li>
                      <li>TourList fullwidth</li>
                    </ul>
                  )}

                  <li onClick={tourGridVisible}>
                    Tour Grid{" "}
                    <span>
                      <FontAwesomeIcon
                        icon={istourGridVisible ? faMinus : faPlus}
                        className="pl-5"
                      />
                    </span>
                  </li>
                  {istourGridVisible && (
                    <ul>
                      {" "}
                      <li>TourGrid Leftsidebar</li>
                      <li>TourGrid Rightsidebar</li>
                      <li>TourGrid fullwidth</li>
                    </ul>
                  )}
                  <li onClick={tourSingleVisible}>
                    Tour Single
                    <span>
                      <FontAwesomeIcon
                        icon={istourSingleVisible ? faMinus : faPlus}
                      />
                    </span>
                  </li>
                  {istourSingleVisible && (
                    <ul>
                      <li>TourSingle Leftsidebar</li>
                      <li>TourSingle Rightsidebar</li>
                      <li>TourSingle fullwidth</li>
                    </ul>
                  )}
                </ul>
              )}

              <button onClick={pageHover}>
                PAGES <FontAwesomeIcon icon={faPlus} />
              </button>
              {ispageHover && (
                <ul>
                  <li>About us </li>
                </ul>
              )}
              <button>
                BLOG <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={()=>window.location.replace("/search")}>
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
