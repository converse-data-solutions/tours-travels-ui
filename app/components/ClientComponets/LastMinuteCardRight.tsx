"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import img from "../../../public/lastminutedeal.jpg";
import { Playfair_Display,Poppins } from "next/font/google";
import { SlCalender } from "react-icons/sl";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppins2 = Poppins({
  subsets: ["latin"],
  weight: "700",
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

const LastMinuteCard = ({ item }: { item: UserData }) => {
  return (
    <div className="rounded-lg md:rounded-xl mb-7 h-full w-full md:pt-1  pt-10 lg:pt-0">
      <Card>
        <div className="w-full  lg:px-0 ">
          <Image
            height={100}
            width={1000}
            src={item.file_name || img}
            alt="img"
            className="w-full h-[24vh] md:h-[60vh] lg:h-[25vh] xl:h-[37.7vh] bgimgcolor md:rounded-xl "
          />
        </div>
        <div className="h-0 relative top-[-180px] lg:top-[-150px] px-7 lg:pl-4 lg:pr-2 lg:px-0 xl:px-7">
          <div className="text-[18px] text-[#FDC703] font-bold" style={playFair.style}>
            {item.state}
          </div>
          <div className=" text-[21px] lg:text-[26px] text-white font-bold" style={playFair.style}>{item.country}</div>
          <div className="text-[#fbbc06] pb-2 font-sans ">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < item.id ? faStar : ["far", "star"]}
                style={{ color: "#fbbc06",marginRight: "4px" }}
              />
            ))}{" "}
            <span className="text-white  text-[16px]" style={poppins.style}>(12)</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className=" text-[16px] lg:text-lg">
              <h1>
                <span className="text-[#fbbc06] text-[18px] font-bold" style={poppins2.style}>
                  ${item.price}
                </span>{" "}
                <span className="text-white text-[16px]" style={poppins.style}>| Per person</span>
              </h1>
            </div>
            <div className="text-white font-bold text-[16px] lg:text-[18px] font-sans pt-2 lg:pt-0">
              <h1>
                {" "}
                <div className="flex flex-row ">
               <div className="pt-[2px]"> <SlCalender/></div>
                <div>&nbsp;{item.days_and_night} Days Tours</div>
                </div>
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
