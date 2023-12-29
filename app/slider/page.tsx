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
import { Playfair_Display,Poppins } from "next/font/google";


const playFair=Playfair_Display({
  subsets:["latin"]
});
const poppins=Poppins({
  subsets:["latin"],
  weight:'400'
})
const poppins1=Poppins({
  subsets:["latin"],
  weight:'800'
})

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
    const handleResize = () => {
      let screenWidth = window.innerWidth;

      if (screenWidth <= 425) {
        setWindowWidth(1);
      } else if (screenWidth <= 768) {
        setWindowWidth(1);
      } else if (screenWidth <= 1024) {
        setWindowWidth(4);
      } else {
        setWindowWidth(4);
      }
    };

    
    window.addEventListener("resize", handleResize);

    
    handleResize();

   
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      <div className="h-auto w-full SliderPart">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={-1}
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
            <SwiperSlide key={item.id} className="zoom-effect-container  ">
              <div className="swiper-slide-content">
                <div className="imageHover">
                  <Image
                    src={img1}
                    alt="img"
                    className=" w-full bgimgcolor h-full "
                  />
                </div>

                <div className=" h-0 top-[47%] md:top-[49%] lg:top-[48%]  xl:top-[47%]    absolute flex flex-col justify-center items-center text-white w-full  gap-y-2 ">
                  <div className=" text-[#fbbc06] font-medium pt-5 text-[18px] text-center " style={playFair.style}>
                    {item.country}
                  </div>
                  <div className="text-white  text-[26px] lg:text-[46px] font-bold text-center" style={playFair.style}>
                    <h1>{item.title}</h1>
                  </div>
                  <div className="text-[#fbbc06] text-[16px] " style={poppins.style}>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={index < item.id ? faStar : ["far", "star"]}
                        style={{ color: "#fbbc06",paddingRight:'4px' }}
                      />
                    ))}{" "}
                    <span className="text-white ">(12)</span>
                  </div>
                  <div className=" text-[16px] lg:text-lg">
                    <h1>
                      <span className="text-[#fbbc06] text-[20px] font-bold" style={poppins1.style} >
                        ${item.price}
                      </span>{" "}
                      <span className="text-white text-[16px]"  style={poppins.style}>| Per person</span>
                    </h1>
                  </div>
                  <div className="text-white font-bold text-[16px]  " style={poppins.style} >
                    <div className="text-white font-extrabold text-[16px]  " style={poppins.style}>
                      {" "}
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      &nbsp;<span className="text-white font-extrabold text-[16px]  " style={poppins1.style}>{item.days_and_night} Days Tours</span>
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
