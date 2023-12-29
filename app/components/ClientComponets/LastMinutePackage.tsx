"use client";
import React from "react";
import Image from "next/image";
import img from "../../../public/TourPackageimg.jpg";
import CardDetails from "../ServerComponents/CardDetails";
import { useState, useEffect } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { SlCalender } from "react-icons/sl";

const poppins = Poppins({
  weight: "600",
  style: ["normal"],
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
  variable: "--poppins",
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
}

export default function LastMinutePackageCard() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/list/bydate`, {
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

  const filteredData = data.filter((item) => item.published === 1).slice(0, 4);

  return (
    <div className="w-full grid md:grid-cols-2 gap-7  px-0  rounded-lg">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow-lg last-deal card-hover btn-fromLeft card-line"
        >
          <div className="w-full  ">
            <div className="outerbox-image rounded-t-md">
              <Image
                src={item.file_name || img}
                alt={item.title}
                height={200}
                width={300}
                className="w-full rounded-t-lg  xl:h-[28vh] lastminuteimg-hover brightness-[58%]"
              />
            </div>
            <button
              className="bg-[#029e9d] relative top-[-35px]  ml-[4%] mr-[3%] lg:mr-[5%]  md:ml-[50%] text-[16px] lg:ml-[90px] xl:ml-[55%] px-2 mx-5 h-[55px] text-white font-bold rounded-lg"
              style={poppins.style}
            >
              <div className="flex">
                <div className="pt-[2px]">
                  {" "}
                  <SlCalender />
                </div>
                <div>&nbsp;{item.days_and_night} Days Tours</div>
              </div>
            </button>

            <CardDetails item={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
