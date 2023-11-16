"use client";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "../../public/beautiful-green-field-scenery-free-photo.webp";
import img2 from "../../public/images.jpeg";
import img3 from "../../public/4f7af96819b05591c4ce89017ccb40db.png";
import alternativeImg from "../../public/alternative.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

export default function PackageSlider() {
  const [windowWidth, setWindowWidth] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      setWindowWidth(1);
    } else if (screenWidth <= 768) {
      setWindowWidth(1);
    } else if (screenWidth <= 1024) {
      setWindowWidth(3);
    } else {
      setWindowWidth(4);
    }
  }, []);

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
        console.log(userDataArray);

        setData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  console.log(`data ${data}`);

  return (
    <>
      <div className="h-[50vh] w-full">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide className="h-[50vh]  bg-orange-500">
            <div>
              <Image src={img2} alt="img" className="h-[50vh] w-full" />
              <div className="text-black z-10"><h1> heading</h1></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[50vh]  bg-orange-500">
            <div>
              <Image src={img2} alt="img" className="h-[50vh] w-full " />
              <div className="text-black z-10 text-lg"><h1> heading</h1></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[50vh]  bg-orange-500">
            <div>
              <Image src={img2} alt="img" className="h-[50vh] w-full " />
              <div className="text-black z-10"><h1> heading</h1></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[50vh]  bg-orange-500 ">
            <div>
              <Image src={img2} alt="img" className="h-[50vh] w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[50vh]  bg-orange-500">
            <div>
              <Image src={img2} alt="img" className="h-[50vh] w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[50vh]  bg-orange-500">
            <div>
              <Image src={img2} alt="img" className="h-[50vh] w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
