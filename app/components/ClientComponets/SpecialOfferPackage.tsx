"use client";
import React from "react";
import Image from "next/image";
import img from "../../../public/TourPackageimg.jpg";
import { useState, useEffect } from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CSSProperties } from "react";
import { Playfair, Playfair_Display, Poppins } from "next/font/google";
import { SlCalender } from "react-icons/sl";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppins1 = Poppins({
  subsets: ["latin"],
  weight: "800",
});

interface UserData {
  id: number;
  title: string;
  start_date: string;
  file_name: any;
  description: string;
  no_of_person: number;
  days_and_night: string;
  country: string;
  state: string;
  price: string | number;
  published: number;
  offer: string;
}

export default function SpecialTourPackageCard() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/packagedetails/byoffer`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        const userDataArray = responseData.data;

        setData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const filteredData = data.filter((item) => item.published === 1).slice(0, 4);

  return (
    <div className="   w-full grid grid-cols-1 md:px-[4%] lg:px-0 md:grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg xl:gird xl:grid-cols-2  xl:px-[15%]  ">
      {filteredData.map((item) => (
        <div key={item.id} className="rounded-lg shadow-lg  ">
          <div className=" w-full h-full outerbox-image rounded-md md:h-[35.3vh] xl:h-[30.2vh]">
            <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden ">
              <div className="outerbox-image rounded-t-md  w-full lg:w-3/5 md:w-2/5">
                <Image
                  src={item.file_name || img}
                  alt={item.title}
                  height={200}
                  width={300}
                  className="w-full h-[35vh] md:h-[35.5vh]  xl:h-[30.2vh] rounded-lg md:rounded-l-lg  md:rounded-none  offersimage"
                />

                <div
                  className="h-0 relative  py-2 top-[-250px] md:bottom-0 left-[-35%] md:top-[-80%]  md:left-[-25%] lg:top-[-260px] lg:left-[-25%]  xl:top-[-76%] xl:left-[-25%] text-white z-20 text-[20px] lg:text-[18px] xl:text-[20px] font-semibold font-sans  pb-10 bg-[#FDC703] text-center -rotate-45"
                  style={poppins1.style}
                >
                  {" "}
                  <span
                    className=" text-[18px] font-semibold lg:text-[18px] xl:text-[25px] font-sans"
                    style={poppins1.style}
                  >
                    {item.offer}{" "}
                  </span>
                  % OFF
                </div>
              </div>

              <div className="card_details1 px-7 pt-10 md:pt-4 lg:pt-8 w-full">
                <div
                  className="text-[18px] text-[#029e9d] pb-2 font-serif font-bold"
                  style={playFair.style}
                >
                  {item.country}
                </div>
                <div className="font-serif font-semibold text-2xl pb-1">
                  {item.state}
                </div>
                <div
                  className="text-[#fbbc06] text-[16px] pb-1  "
                  style={poppins.style}
                >
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={index < item.id ? faStar : ["far", "star"]}
                      style={{ color: "#fbbc06", marginRight: "4px" }}
                    />
                  ))}{" "}
                  <span
                    className="text-[#777777] text-[16px]"
                    style={poppins.style}
                  >
                    (12)
                  </span>
                </div>
                <span
                  className="text-[16px] pb-6 text-gray-500 font-serif "
                  style={poppins.style}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="h-[50px]"
                  ></div>
                </span>{" "}
                <div
                  className=" text-[#029e9d] text-[18px] "
                  style={poppins.style}
                >
                  {" "}
                  <div className="flex">
                    <div className="pt-[2px]">
                      {" "}
                      <SlCalender />
                    </div>
                    <div>&nbsp;{item.days_and_night} Days Tours</div>
                  </div>
                </div>
                <br></br>
                <hr className=" border-gray-200 border-dashed  w-[100%]"></hr>
                <div className=" text-[hsl(187,82%,35%)] pt-2 pb-5">
                  <span className="text-xl font-extrabold ">
                    ${item.price}{" "}
                  </span>
                  <span className="text-gray-700  font-thin">
                    &nbsp;|&nbsp;Per person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
