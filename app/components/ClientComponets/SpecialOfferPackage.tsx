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

  const titleFontStyle: CSSProperties = {
    fontFamily: "sans-serif, poppins",

    fontWeight: "",
  };
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
    <div className="   w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg xl:gird xl:grid-cols-2  xl:px-[15%]  ">
      {filteredData.map((item) => (
        <div key={item.id} className="rounded-lg shadow-lg  ">
          <div className=" w-full h-full outerbox-image rounded-md xl:h-[30.2vh]">
            <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden ">
              <div className="outerbox-image rounded-t-md  w-full lg:w-3/5 ">
                <Image
                  src={item.file_name || img}
                  alt={item.title}
                  height={200}
                  width={300}
                  className="w-full xl:h-[30.2vh] rounded-lg md:rounded-l-lg h-full  offersimage"
                />

                <div className="h-0 relative top-[-280px] md:bottom-0 left-[-40%] md:top-[-90%]  md:left-[-35%] lg:top-[-270px] lg:left-[-30%]  xl:top-[-80%] xl:left-[-30%] text-white z-20 text-[20px] lg:text-[18px] xl:text-[20px] font-bold font-sans  pb-10 bg-[#FDC703] text-center -rotate-45">
                  {" "}
                  <span className=" text-[20px] lg:text-[18px] xl:text-[25px] font-bold font-sans">
                    {item.offer}{" "}
                  </span>
                  % OFF
                </div>
              </div>

              <div className="card_details1 px-7 pt-10 w-full">
                <div className="text-xl text-[hsl(180,82%,35%)] pb-2 font-serif font-semibold">
                  {item.country}
                </div>
                <div className="font-serif font-semibold text-2xl pb-1">
                  {item.state}
                </div>
                <div className="text-[#fbbc06] lg:text-xl pb-1  ">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={index < item.id ? faStar : ["far", "star"]}
                      style={{ color: "#fbbc06", gap: "1" }}
                    />
                  ))}{" "}
                  <span className="text-gray-700 text-xl">(12)</span>
                </div>
                <span className="text-[16px] pb-6 text-gray-500 font-serif ">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="h-[50px]"
                  ></div>
                </span>{" "}
                <div
                  className=" text-[hsl(180,82%,35%)] text-[18px] "
                  style={titleFontStyle}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} className="pr-2" />
                  {item.days_and_night}
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
