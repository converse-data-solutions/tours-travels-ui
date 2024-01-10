"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "../../../public/subdestination3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Playfair_Display, Poppins } from "next/font/google";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

export default function TopdestinationRightCard() {
  const [uniqueCountries, setUniqueCountries] = useState<
    Record<string, StateData>
  >({});
  const [visibleCountries, setVisibleCountries] = useState<
    [string, StateData][]
  >([]);
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

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
        setVisibleCountries(entries.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="text-[26px] font-bold pb-2" style={playFair.style}>
        Top Destinations
      </div>

      <div
        className="flex"
        style={{
          height: "2px",
        }}
      >
        <div style={{ flex: "15%", background: "#029e9d" }}></div>
        <div style={{ flex: "85%", background: "#f1f1f1" }}></div>
      </div>

      <br></br>
      <div className="w-full">
        <div className="grid grid-cols-1  gap-7 h-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {visibleCountries.map(([country, data]) => (
              <SwiperSlide key={country} className="h-full w-full ">
                <div className="w-full h-full">
                  <div className=" rounded-lg w-[100%] ">
                    <Image
                      src={img}
                      className="w-full    rounded-lg  "
                      height={100}
                      width={1000}
                      alt="Image"
                    />
                  </div>
                  <div className="h-0">
                    <div className="relative top-[-80px] lg:top-[-100px] flex flex-row justify-between px-7">
                      <div className="flex flex-col">
                        <div
                          className="text-[18px] text-[#FDC703] font-bold"
                          style={playFair.style}
                        >
                          {country}
                        </div>
                        <div
                          className="text-white text-[22px] lg:text-[26px] font-bold"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
