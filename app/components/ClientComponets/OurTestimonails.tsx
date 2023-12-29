"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import img1 from "../../../public/testimonails1.jpg";
import img2 from "../../../public/destimonails2.jpg";
import img3 from "../../../public/destimonails3.jpg";
import { Playfair_Display, Poppins } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const mockData = [
  {
    id: 1,
    title: "Mock Package 1",
    file_name: img1,
    name: "Loneal South",
    position: "Accountant",
  },
  {
    id: 2,
    title: "Mock Package 2",
    file_name: img2,
    name: "Kelton Mick",
    position: "Manager",
  },
  {
    id: 3,
    title: "Mock Package 1",
    file_name: img3,
    name: "Jared Erondu",
    position: "Supervisor",
  },
];

export default function OurTestimonailsSlider() {
  const [windowWidth, setWindowWidth] = useState(4);

  const titleFontStyle: CSSProperties = {
    fontFamily: "Poppins, sans-serif",
    color: "#777777",
  };

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      window.location.reload();
      setWindowWidth(1);
    } else if (screenWidth <= 1024) {
      setWindowWidth(1);
    } else {
      setWindowWidth(2);
    }
  }, []);

  return (
    <>
      <div className="h-auto w-full SliderPart md:px-[5%] lg:px-[5%]">
        <Swiper
          slidesPerView={windowWidth}
          spaceBetween={50}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={800}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {mockData.map((item) => (
            <SwiperSlide
              key={item.id}
              className=" border-gray-200 border-[1px] py-7 px-4 rounded-lg"
            >
              <div className="">
                <div
                  className="text-[20px] text-center gap-7 text-[#777777]"
                  style={poppins.style}
                >
                  <span className="text-[40px] text-[#029e9d] hidden sm:inline-block">
                    <FontAwesomeIcon icon={faQuoteLeft} className="pr-2" />
                  </span>
                  <span>
                    <i>
                      Lorem Ipsum is simply dummy text of the printing
                      andypesetting industry. Lorem ipsum a simple Lorem Ipsum
                      has been the industry's standard dummy hic et quidem.
                      Dignissimos maxime velit unde inventore quasi vero
                      dolorem.
                    </i>
                  </span>
                </div>
                <br></br>
                <div className="flex justify-center">
                  {" "}
                  <Image
                    src={item.file_name}
                    alt="img"
                    className=" h-30 w-30 mx-auto rounded-full "
                    height={100}
                    width={100}
                  />
                </div>

                <div
                  className="text-center pt-2 text-[18px] text-[#029e9d] font-serif font-bold"
                  style={playFair.style}
                >
                  {item.name}
                </div>

                <div
                  className="text-center text-gray-500 text-[16px] font-serif font-semibold pb-2"
                  style={poppins.style}
                >
                  {item.position}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
