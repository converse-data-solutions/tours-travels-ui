"use client";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { CSSProperties } from "react";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img from "../../../public/Tourguideimage.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface UserData {
  id: number;
  first_name: string;
  file_name: string;
  agent_position: string;
  role_id: number;
}

export default function TourGuideSlider() {
  const [windowWidth, setWindowWidth] = useState(4);
  const [data, setData] = useState<UserData[]>([]);

  const titleFontStyle: CSSProperties = {
    fontFamily: "sans-serif, poppins",
  };

  const headingFontStyle: CSSProperties = {
    fontFamily: " playfair display, serif",
  };
  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      window.location.reload();
      setWindowWidth(1);
    } else if (screenWidth <= 768) {
      setWindowWidth(1);
    } else if (screenWidth <= 1024) {
      setWindowWidth(4);
    } else {
      setWindowWidth(4);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/agent/details`, {
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

  return (
    <>
      <div className="h-auto w-full">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={25}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          speed={1000}
          modules={[Autoplay, Navigation]}
          className=""
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="group rounded-lg overflow-hidden">
                <div className="h-[90%] tour-outer rounded-lg relative overflow-hidden transition-transform transform   duration-1000">
                  <Image
                    src={img}
                    alt="img"
                    className="w-full h-full rounded-t-lg tour-guides-image transition-transform transform group-hover:scale-120"
                  />

                  <div className="bg-[#029E9D] rounded-b-lg py-4 tour-guide absolute bottom-0 left-0 w-full text-center transition-transform transform group-hover:translate-y-[-20px] duration-1000 ">
                    <div
                      className="text-[22px] text-white font-bold"
                      style={headingFontStyle}
                    >
                      {item.first_name}
                    </div>
                    <div
                      className="text-white font-bold text-[16px]"
                      style={titleFontStyle}
                    >
                      <h1>{item.agent_position}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
