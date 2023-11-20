"use client";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "../../public/deal1.jpg";
import img2 from "../../public/images.jpeg";
import img3 from "../../public/4f7af96819b05591c4ce89017ccb40db.png";
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

export default function PackageSlider() {
  const [windowWidth, setWindowWidth] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      window.location.reload()
      setWindowWidth(1);
    } else if (screenWidth <= 768) {
      setWindowWidth(1);
    } else if (screenWidth <= 1024) {
      setWindowWidth(2);
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
    

        setData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
 

  

  return (
    <>
      <div className="h-[70vh] w-full">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={0}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper "
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="h-[70vh] ">
              <div className="swiper-slide-content">
                
                  
                  <div className="imageHover">
                    <Image src={img1} alt="img" className="h-[70vh] w-full bgimgcolor " />
                  </div>
                  
                  <div className="z-10 absolute flex flex-col justify-center items-center text-white w-full top-44 gap-y-5">
                    <div className="text-2xl text-[#fbbc06] font-medium ">{item.country}</div>
                    <div className="text-white text-4xl font-bold">
                      <h1>{item.title}</h1>
                    </div>
                    <div className="text-[#fbbc06] text-xl ">
                    
                     
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={index < item.id? faStar : ["far", "star"]} 
                          style={{ color: "#fbbc06" }}
                        />
                      ))}     <span className="text-white text-xl">(12)</span>               
                      </div>
                    <div className="text-lg">
                      <h1>
                        <span className="text-[#fbbc06] text-xl font-bold">{item.price} </span>{" "}
                        <span className="text-white">&nbsp;|&nbsp;PerPerson</span>
                      </h1>
                    </div>
                    <div className="text-white font-bold text-xl ">
                      <h1> <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;{item.days_and_night}</h1>
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
