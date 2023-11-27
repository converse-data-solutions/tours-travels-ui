"use client";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
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
      setWindowWidth(4);
    }
  }, []);

  return (
    <>
      <div className=" w-full">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={0}
          centeredSlides={true}
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
          className="mySwiper "
        >
          <SwiperSlide className="flex justify-center img-radius  ">
            <div className=" ">
              <Image className="" src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center img-radius ">
            <div className=" ">
              <Image className="  " src={img2} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center img-radius ">
            <div className=" ">
              <Image className=" " src={img3} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center img-radius ">
            <div className=" ">
              <Image className=" " src={img4} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center img-radius ">
            <div className=" ">
              <Image className=" " src={img1} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center img-radius ">
            <div className=" ">
              <Image className=" " src={img2} alt="" />
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center img-radius ">
            <div className="">
              <Image className="  " src={img3} alt="" />
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide className="flex justify-center img-radius ">
            <div className=" ">
              <Image className=" " src={img4} alt="" />
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default PackageSlider;
