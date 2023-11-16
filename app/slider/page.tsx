'use client';
import React, { useRef, useState,useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import img1 from "../../public/beautiful-green-field-scenery-free-photo.webp";
import img2 from "../../public/images.jpeg";
import img3 from "../../public/4f7af96819b05591c4ce89017ccb40db.png";
import alternativeImg from "../../public/alternative.png";




import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PackageSlider() {
  const [windowWidth, setWindowWidth] = useState(4);

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
  const alternateImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gpZSb_Y8zMJevdd9E2ZxI4doS3D4BMsus5ltKAyKydLH-zxnGIQQ3Dx7sNWcnZvFea4&usqp=CAU';
  return (
    <>
    <div className='h-[50vh] w-full'>
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
        <SwiperSlide className='h-[50vh]  bg-orange-500'><Image src={img1} alt={alternateImg} className='h-[50vh] w-full'/></SwiperSlide>
        <SwiperSlide className='h-[50vh] bg-green-600'><div><Image src={img2} alt={alternateImg} className='h-[50vh] w-full'/></div></SwiperSlide>
        <SwiperSlide className='h-[50vh] bg-blue-800'><div><Image src={img3} alt={alternateImg}  className='h-[50vh] w-full'/></div></SwiperSlide>
        <SwiperSlide className='h-[50vh]  bg-orange-500'><div><Image src={img1} alt={alternateImg}  className='h-[50vh] w-full'/></div></SwiperSlide>
        <SwiperSlide className='h-[50vh] bg-green-600'><div><Image src={img2} alt={alternateImg}  className='h-[50vh] w-full' /></div></SwiperSlide>
        <SwiperSlide className='h-[50vh] bg-blue-800'><div><Image src={img3} alt={alternateImg}  className='h-[50vh] w-full'/></div></SwiperSlide>
       
        
      </Swiper>
      </div>
    </>
  );
}
