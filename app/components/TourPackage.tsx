"use client";
import React from "react";
import Image from "next/image";
import img from "../../public/TourPackageimg.jpg";
import { useState, useEffect } from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
      {filteredData.map((item) => (
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
            <button className="bg-[hsl(180,82%,35%)] relative top-[-35px] ml-[60%] md:ml-[50%] mr-[5%]   lg:text-lg lg:ml-[90px] xl:ml-[195px]  px-2 mx-5 h-[55px]  text-white font-extrabold rounded-lg ">
              <FontAwesomeIcon icon={faCalendarAlt} /> {item.days_and_night}
            </button>

            <div className="card_details1 py- px-7">
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
              <br></br>
              <hr className=" border-gray-200 border-dashed  w-[100%]"></hr>
              <div className=" text-[hsl(187,82%,35%)] pt-2 pb-7">
                <span className="text-xl font-extrabold ">${item.price} </span>
                <span className="text-gray-700  font-thin">
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
