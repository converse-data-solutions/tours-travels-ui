"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import destination1 from "../../../public/destination1.jpg";
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

export const DestinationCard = () => {
  const [uniqueCountries, setUniqueCountries] = useState<
    Record<string, StateData>
  >({});

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
        const firstCountry = Object.entries(responseData.data)[0];
        setUniqueCountries({ [firstCountry[0]]: firstCountry[1] });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <div className="w-full h-full">
        {Object.entries(uniqueCountries).map(([country, data]) => (
          <div key={country} className="">
            <div className="zoom-effect-container rounded-lg">
              <Image
                src={destination1}
                className="h-auto w-full rounded-lg destination-card  overflow-hidden "
                height={100}
                width={1000}
                alt="Image"
              />
            </div>
            <div className="h-0">
              <div className="relative top-[-100px] flex flex-row justify-between px-6 md:pl-10 md:pr-16 lg:px-6 ">
                <div className="flex flex-col ">
                  <div
                    className="text-[18px] text-[#FDC703] font-bold"
                    style={playFair.style}
                  >
                    {country}{" "}
                  </div>
                  <div
                    className="text-white text-[26px] font-bold"
                    style={playFair.style}
                  >
                    {data.states[0]}
                  </div>
                </div>

                <div className="items-center flex ">
                  <button
                    className="text-white text-[16px] bg-[#029E9D] rounded-lg px-2 py-1 font-bold"
                    style={poppins.style}
                  >
                    {data.count} Tours
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
