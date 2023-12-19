"use client";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img from "../../public/enovataimg.png";
import img1 from "../../public/partnerimg2.png";
import img2 from "../../public/partnerimg3.png";
import img3 from "../../public/partnerimg4.png";
import img4 from "../../public/partnerimg5.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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

const PackageSlider = () => {
  const [windowWidth, setWindowWidth] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      window.location.reload();
      setWindowWidth(1);
    } else if (screenWidth <= 768) {
      setWindowWidth(1);
    } else if (screenWidth <= 1024) {
      setWindowWidth(2);
    } else {
      setWindowWidth(5);
    }
  }, []);

  return (
    <>
      <div className=" w-full ">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={80}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="Partner-swiper"
        >
          <SwiperSlide className="flex justify-center   ">
            <div className=" ">
              <Image height={70} width={1000} className=" h-14 font-serif" src={img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center   ">
            <div className=" ">
              <Image  height={70} width={1000} className=" h-14  font-serif" src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center  ">
            <div className=" ">
              <Image height={70} width={1000} className=" h-14 font-serif" src={img2} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center  ">
            <div className=" ">
              <Image  height={70} width={1000} className="h-14  font-serif" src={img3} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center ">
            <div className=" ">
              <Image  height={70} width={1000} className="h-14  font-serif" src={img4} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center   ">
            <div className=" ">
              <Image height={70} width={1000} className="h-14  font-serif" src={img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center   ">
            <div className=" ">
              <Image  height={70} width={1000} className=" h-14  font-serif" src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center  ">
            <div className=" ">
              <Image height={70} width={1000} className=" h-14  font-serif" src={img2} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center  ">
            <div className=" ">
              <Image  height={70} width={1000} className="h-14  font-serif" src={img3} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center ">
            <div className=" ">
              <Image  height={70} width={1000} className="h-14  font-serif" src={img4} alt="" />
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default PackageSlider;
