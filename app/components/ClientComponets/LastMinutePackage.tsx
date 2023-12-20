"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import img from "../../../public/TourPackageimg.jpg";
import CardDetails from "../ServerComponents/CardDetails";
import { useState, useEffect } from "react";

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
    <div className="w-auto grid md:grid-cols-2 gap-7 lg:px-4 rounded-lg">
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
                className="w-full rounded-t-lg  xl:h-[28vh] lastminuteimg-hover"
              />
            </div>
            <button className="bg-[hsl(180,82%,35%)] relative top-[-35px]  ml-[70%] mr-[5%]  md:ml-[180px] lg:text-lg lg:ml-[90px] xl:ml-[195px] px-2 mx-5 h-[55px] text-white font-extrabold rounded-lg">
              <FontAwesomeIcon icon={faCalendarAlt} /> {item.days_and_night}
            </button>

            <CardDetails item={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
