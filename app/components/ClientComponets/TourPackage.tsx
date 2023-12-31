"use client";
import React from "react";
import Image from "next/image";
import img from "../../../public/TourPackageimg.jpg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Playfair_Display, Poppins } from "next/font/google";
import { SlCalender } from "react-icons/sl";

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
}

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppins1 = Poppins({
  subsets: ["latin"],
  weight: "700",
});
export default function TourPackageCard() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
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

  const filteredData = data.filter((item) => item.published === 1).slice(0, 3);

  return (
    <div className="   w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  rounded-lg  ">
      {filteredData.map((item, index) => (
        <div
          key={item.id}
          className={`
        rounded-lg shadow-lg last-deal card-hover btn-fromLeft card-line
        ${index === 2 ? "md:col-span-full" : "md:col-span-1"}
        lg:col-span-1 xl:col-span-1
      `}
        >
          <div className=" w-full h-full outerbox-image rounded-md">
            <div className="outerbox-image rounded-t-md">
              <Image
                src={item.file_name || img}
                alt={item.title}
                height={200}
                width={300}
                className="w-full lg:h-[25vh]  rounded-t-lg xl:w-full xl:h-[28vh] lastminuteimg-hover brightness-[57%]"
              />
            </div>

            <button
              className="bg-[#029e9d] relative top-[-35px] ml-[42%] md:ml-[50%] mr-[3%] xl:mr-[5%] min-w-fit  text-[16px]  xl:ml-[58%]  px-3 mx-5 h-[55px]  text-white font-bold rounded-lg "
              style={poppins1.style}
            >
              <div className="flex gap-1">
                {" "}
                <div className="pt-[2px]">
                  <SlCalender />
                </div>
                <div>{item.days_and_night} Days Tours</div>
              </div>
            </button>

            <div className="card_details1 py- px-7">
              <div
                className="text-[18px] text-[#029e9d] pb-2 font-bold"
                style={playFair.style}
              >
                {item.country}
              </div>
              <div
                className=" font-bold text-[26px] pb-1 "
                style={playFair.style}
              >
                {item.state}
              </div>
              <div className="text-[#fbbc06]  pb-1  ">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={index < item.id ? faStar : ["far", "star"]}
                    style={{ color: "#fbbc06", marginRight: "4px" }}
                  />
                ))}{" "}
                <span
                  className="text-gray-700 text-[16px]"
                  style={poppins.style}
                >
                  (12)
                </span>
              </div>
              <span
                className="text-[16px] pb-6 text-gray-500  "
                style={poppins.style}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="h-[50px]"
                ></div>
              </span>{" "}
              <br></br>
              <hr className=" border-gray-200 border-dashed  w-[100%]"></hr>
              <div className=" text-[hsl(187,82%,35%)] pt-2 pb-7">
                <span className="text-[20px] font-bold " style={poppins1.style}>
                  ${item.price}{" "}
                </span>
                <span
                  className="text-gray-700 text-[16px] font-thin"
                  style={poppins.style}
                >
                  &nbsp;|&nbsp;Per person
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
