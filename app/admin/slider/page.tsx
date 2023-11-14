"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../../public/cascade-boat-clean-china-natural-rural (3rd copy).jpg";
import apiConfiguration from "@/app/config";
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

const FooterPart = () => {
  const [windowWidth, setWindowWidth] = useState(4);

  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<UserData[]>([]);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      setWindowWidth(2);
    } else if (screenWidth <= 768) {
      setWindowWidth(3);
    } else if (screenWidth <= 1024) {
      setWindowWidth(4);
    } else {
      setWindowWidth(8);
    }
  }, []);

  useEffect(() => {
    // const token = localStorage.getItem("accessToken");

    fetch(`${apiConfiguration.externalservice.backendUrl}/package/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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
  }, [searchQuery]);

  return (
    <div>
      <Swiper
        slidesPerView={windowWidth}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center img-radius  ">
          <div className="image-box img-radius ">
            <Image
              className="image img-radius  "
              src={img1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center img-radius  ">
          <div className="image-box img-radius ">
            <Image
              className="image img-radius   "
              src={img1}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FooterPart;