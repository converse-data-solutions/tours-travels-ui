"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import img from "../../public/lastminutedeal.jpg";

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

const LastMinuteCard = ({ item }: { item: UserData }) => {
  return (
    <div className="rounded-lg mb-7 h-full w-full ">
      <Card>
        <div className="w-full px-4 lg:px-0 ">
          <Image
            height={100}
            width={1000}
            src={item.file_name || img}
            alt="img"
            className="w-full h-auto lg:h-[25vh] xl:h-[37.4vh] bgimgcolor"
          />
        </div>
        <div className="h-0 relative top-[-170px] lg:top-[-200px] px-7">
          <div className="text-[18px] text-[#FDC703] font-sans">
            {item.state}
          </div>
          <div className="text-[26px] text-white font-sans">{item.country}</div>
          <div className="text-[#fbbc06] pb-2 font-sans ">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < item.id ? faStar : ["far", "star"]}
                style={{ color: "#fbbc06" }}
              />
            ))}{" "}
            <span className="text-white ">(12)</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className=" text-[16px] lg:text-lg">
              <h1>
                <span className="text-[#fbbc06] text-[20px] font-bold font-sans">
                  ${item.price}
                </span>{" "}
                <span className="text-white">| Per person</span>
              </h1>
            </div>
            <div className="text-white font-bold text-[16px] lg:text-[18px] font-sans pt-2 lg:pt-0">
              <h1>
                {" "}
                <FontAwesomeIcon icon={faCalendarAlt} />
                &nbsp;{item.days_and_night}
              </h1>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const LastMinuteCardRight = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const renderedData = data.slice(0, 3);
  return (
    <div className="h-auto ">
      {!loading &&
        renderedData.map((item) => (
          <LastMinuteCard key={item.id} item={item} />
        ))}
    </div>
  );
};

export default LastMinuteCardRight;
