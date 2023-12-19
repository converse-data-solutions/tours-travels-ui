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
import { Autoplay } from "swiper/modules";
import logo from "../../../public/logo-white.png";
import backgroundimage from "../../../public/shape8.png";
import img1 from "../../../public/beautiful-green-field-scenery-free-photo.webp";
import img2 from "../../../public/4f7af96819b05591c4ce89017ccb40db.png";
import img3 from "../../../public/images.jpeg";

import {
  faCcDiscover,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import AnimationPart from "./FooterAnimation";
import ShapesAnimation from "./Animation";
const FooterPart = () => {
  const [windowWidth, setWindowWidth] = useState(4);

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

  return (
    <div>
      <div className="flex">
        <Image
          src={backgroundimage}
          className="bg-[#17233E] w-[33.33%] relative top-1 "
          alt=""
        />
        <Image
          src={backgroundimage}
          className="bg-[#17233E] w-[33.33%] relative top-1"
          alt=""
        />
        <Image
          src={backgroundimage}
          className="bg-[#17233E] w-[33.33%] relative top-1"
          alt=""
        />
      </div>

      <div className=" w-full flex flex-col items-center p-4 pt-20 bg-[#17233E]">
        <div className="w-full lg:max-w-[1290px] grid grid-cols-1 ">
          <div className="bg-[#17233E] h-[131px] md:h-[195px] lg:h-[97px] xl:h-[135px] ">
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
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="flex justify-center img-radius  ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius   bg-[#17233E]"
                    src={img1}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img2}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img3}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img1}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img2}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img3}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius ] bg-[#17233E]"
                    src={img1}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img2}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center img-radius ">
                <div className="image-box img-radius ">
                  <Image
                    className="image img-radius  bg-[#17233E]"
                    src={img3}
                    alt=""
                  />
                </div>{" "}
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center relative z-10 top-[-70%] md:top-[-60%] lg:top-[-70%] xl:top-[-76%] outline-[3px] outline-black   m-[2px]">
              <div className="border-2 border-white p-1 rounded-lg">
                <button className="bg-slate-50 text-Play-fair rounded-lg gap-1 flex items-center px-5 py-2">
                  <div>
                    <InstagramIcon />
                  </div>
                  <div>Follow On Instagram</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#17233E] h-[1630px] md:h-[1000px]  blueBackground lg:h-[620px] lg:overflow-hidden">
        <div
          className="background-travelers  grid grid-cols-1 p-4 justify-items-center "
          style={{
            backgroundImage: `url(https://htmldesigntemplates.com/html/travelin/images/background_pattern.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "1100px",
            height: "600px",
          }}
        >
          <div className="h-screen lg:max-w-[1290px] ">
            <div className="  grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 text-white text-[16px] lg:gap-0">
              <div className="flex flex-col lg:px-2">
                <Image src={logo} alt="logo" className="h-[46px] w-[216px]" />
                <p className="my-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  suspendisse leo neque iaculis molestie sagittis maecenas
                  aenean eget molestie sagittis.
                </p>
                <div className="flex flex-col gap-4 mb-[32px]">
                  <h4>
                    <span className="font-semibold">PO Box :</span>{" "}
                    +47-252-254-2542
                  </h4>
                  <h4>
                    <span className="font-semibold">Location :</span> Collins
                    Street, sydney, Australia
                  </h4>
                  <h4>
                    <span className="font-semibold">Email :</span>{" "}
                    info@Travelin.com
                  </h4>
                  <h4>
                    <span className="font-semibold">Website :</span>{" "}
                    www.Travelin.com
                  </h4>
                </div>
              </div>

              <div className="mb-[32px] flex flex-col lg:px-2">
                <h2 className=" border-white font-bold text-2xl pb-2">
                  Quick Link
                </h2>
                <hr className="w-12 pb-6  font-extrabold"></hr>
                <div className="flex flex-col gap-4 md:justify-between h-full ">
                  <h3>About Us</h3>
                  <h3>Delivery Information</h3>
                  <h3>Privacy Policy</h3>
                  <h3>Terms & Conditions</h3>
                  <h3>Customer Service</h3>
                  <h3>Return Policy</h3>
                </div>
              </div>

              <div className="mb-[32px] flex flex-col lg:px-2">
                <h2 className="  border-white font-bold text-xl pb-2">
                  Categories
                </h2>
                <hr className="w-12 pb-6 font-extrabold"></hr>
                <div className="flex flex-col gap-4 md:justify-between h-full ">
                  <h3>Travel</h3>
                  <h3>Technology</h3>
                  <h3>Lifestyle</h3>
                  <h3>Destinations</h3>
                  <h3>Entertainment</h3>
                  <h3>Business</h3>
                </div>
              </div>

              <div className="mb-[32px] flex flex-col  lg:px-2">
                <h2 className="  border-white text-xl font-bold pb-2">
                  Newsletter
                </h2>
                <hr className="w-12 pb-6 font-extrabold"></hr>
                <div className="grid gap-4">
                  <p>
                    Jin our community of over 200,000 global readers who
                    receives emails filled with news, promotions, and other good
                    stuff.
                  </p>
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-1">
                    <div className="bg-white pl-5 py-3 lg:py-[11px] rounded-lg flex items-center">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full outline-none text-[#000] rounded-lg text-[15px] "
                      />
                    </div>
                    <button className="bg-[hsl(180,82%,35%)] text-white py-3  hover:bg-yellow-400  px-5 rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-width lg:grid grid-cols-4 px-2 justify-between items-center text-white">
              <div className="flex justify-start">
                <h3 className="text-lg font-bold">We Support : </h3>
                <div className="flex gap-4 items-center">
                  <i className="fa-brands fa-cc-paypal"></i>
                  <FontAwesomeIcon icon={faCcMastercard} />
                  <FontAwesomeIcon icon={faCcPaypal} />
                  <FontAwesomeIcon icon={faCcStripe} />
                  <FontAwesomeIcon icon={faCcVisa} />
                  <FontAwesomeIcon icon={faCcDiscover} />
                </div>
              </div>
              <div></div>
              <div></div>

              <div className="mt-2 flex gap-4  lg:gap-1  lg:mt-0">
                <div className="bg-white px-5 py-3 lg:py-[11px] rounded-lg flex items-center w-[70%]">
                  <select
                    name=""
                    id=""
                    className=" custom-dropdown w-full bg-white text-black outline-none"
                  >
                    <option value="English" className="">
                      English
                    </option>
                    <option value="Chinese">Chinese</option>
                    <option value="Russian">Russian</option>
                  </select>
                </div>

                <select className="bg-white w-[30%] text-black rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%] ">
                  <option value="$ USD" className="">
                    $ USD
                  </option>
                  <option value="$ AUDI">$ AUDI</option>
                  <option value="$ YEN">$ YEN</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col py-5 md:px-6 rounded-xl mt-6 bg-[#fbfbfb12] md:flex-row justify-between  text-white">
              <div className="flex justify-center items-center">
                <h3>2022 Travelin. All rights reserved.</h3>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <div className="bg-[#fbfbfb12] p-3 rounded-[50%] ">
                  <FacebookOutlinedIcon />
                </div>
                <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                  <TwitterIcon />
                </div>
                <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                  <InstagramIcon />
                </div>
                <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="container" className="">
        {/* <AnimationPart /> */}

        <div id="your-div"></div>
      </div>
    </div>
  );
};

export default FooterPart;
