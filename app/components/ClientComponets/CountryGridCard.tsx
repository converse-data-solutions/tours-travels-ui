"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Poppins, Playfair_Display } from "next/font/google";
import img from "../../../public/beautiful-green-field-scenery-free-photo.webp";
import { SlCalender } from "react-icons/sl";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const poppins1 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface CountryGridCardProps {
  item: {
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
  };
}
export const CountryGridCard: React.FC<CountryGridCardProps> = ({ item }) => {
  const [data, setData] = useState<CountryGridCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/get`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        const userDataArray = responseData.data;

        setData(userDataArray);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="   w-full  rounded-lg  ">
      <div
        key={item.id}
        className="rounded-lg shadow-lg last-deal card-hover btn-fromLeft card-line "
      >
        <div className=" w-full h-full outerbox-image rounded-md">
          <div className="outerbox-image rounded-t-md">
            <Image
              src={item.file_name || img}
              alt={item.title}
              height={200}
              width={300}
              className="w-full lg:h-[25vh]  rounded-t-lg xl:w-full xl:h-[28vh] lastminuteimg-hover"
            />
          </div>
          <button
            className="bg-[#029e9d] relative top-[-30px] ml-[40%] xl:ml-[52%] md:ml-[53%]   text-[16px]   px-3 h-[55px]  text-white font-bold rounded-lg "
            style={poppins1.style}
          >
            <div className="flex">
              <div className="pt-[2px]">
                {" "}
                <SlCalender />
              </div>
              <div>&nbsp;{item.days_and_night} Days Tours</div>
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
                  style={{ color: "#fbbc06", gap: "1" }}
                />
              ))}{" "}
              <span className="text-gray-700 text-[16px]" style={poppins.style}>
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
    </div>
  );
};
