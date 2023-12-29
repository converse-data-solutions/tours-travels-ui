"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "../../../public/subdestination3.jpg";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

interface StateData {
  count: number;
  states: string[];
}

interface CountryData {
  count: number;
  states: string[];
}

interface ResponseData {
  data: Record<string, CountryData>;
}

export default function SubDestinationCard() {
  const [uniqueCountries, setUniqueCountries] = useState<
    Record<string, StateData>
  >({});
  const [visibleCountries, setVisibleCountries] = useState<
    [string, StateData][]
  >([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/country/filter`, {
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
      .then((responseData: ResponseData) => {
        const entries = Object.entries(responseData.data);
        setUniqueCountries(responseData.data);
        setVisibleCountries(entries.slice(1, 5));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-7 xl:w-[100%] xl:h-[80%]">
      {visibleCountries.map(([country, data]) => (
        <div className="w-full" key={country}>
          <div className="zoom-effect-container rounded-lg">
            <Image
              src={img}
              className="w-full h-auto rounded-lg destination-card"
              height={100}
              width={1000}
              alt="Image"
            />
          </div>
          <div className="h-0">
            <div className="relative top-[-100px] flex flex-row justify-between px-7  lg:px-7">
              <div className="flex flex-col">
                <div
                  className="text-[18px] text-[#FDC703] font-bold"
                  style={playFair.style}
                >
                  {country}
                </div>
                <div
                  className="text-white  text-[21px] lg:text-[26px] font-bold"
                  style={playFair.style}
                >
                  {data.states[0]}
                </div>
              </div>
              <div className="items-center flex">
                <button
                  className="text-white bg-[#029E9D] font-bold text-[16px] rounded-lg px-2 py-1"
                  style={poppins.style}
                >{`${data.count} Tours`}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
