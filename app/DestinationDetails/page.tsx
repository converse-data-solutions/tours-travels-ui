import React from "react";
import { HomePage } from "../components/CommonComponents/HomePage";
import Image from "next/image";
import backgroundImage from "../../public/booknowpageimg.jpg";
import BackgroundShape from "../components/ServerComponents/BackgroundShape8";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import TopDestinations from "../components/ServerComponents/TopDestionContent";
import WholeDestinationCard from "../components/ClientComponets/wholeDestinationCard";
import ScrollDetailsComponent from "../components/ClientComponets/ScrollDetails";
import ArrowPart from "../components/ClientComponets/ArrowPart";
import VideoPart from "../homepage/VideoPart";
import OurPartnersHeading from "../components/ServerComponents/OurPartnersHeading";
import PartnersHeading from "../homepage/OurPartners";
import FooterPart from "../components/CommonComponents/FooterPart";
import DestinationLeftSide from "../components/ServerComponents/DestinationLeftSide";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const DestinationDetailsPage = () => {
  return (
    <>
      <div className="Destination-part">
        <div className="">
          <Image
            height={100}
            width={1000}
            src={backgroundImage}
            alt=""
            className=" h-[80vh] w-[100%]  lg:h-[130vh] lg:w-screen z-[-10] fixed top-[45px] brightness-[40%]"
          />
          <div className=" bg-white ">
            <HomePage />
          </div>

          <div className="lg:h-full h-[320px]  lg:py-[10%] w-full flex justify-center items-center xl:py-[6%]">
            <div className="flex-col">
              <div
                className="text-white text-center text-[26px] lg:text-[56px] font-semibold"
                style={{ ...playFair.style }}
              >
                BANGKOK - THAILAND
              </div>
              <div
                className="text-center text-[16px]"
                style={{ ...poppins.style }}
              >
                <span className="text-[#029e9d]" style={{ ...poppins.style }}>
                  Home{" "}
                </span>{" "}
                <span className="text-white px-5">|</span>{" "}
                <span
                  className="text-white text-bold"
                  style={{ ...poppins.style }}
                >
                  Destination Lists
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="relative top-[13px] md:top-[-20px] lg:top-[35px] xl:top-[0px]">
              <BackgroundShape />
            </div>

            <div className="">
              <div className="px-4 md:px-10">
                <DestinationLeftSide />
              </div>
              <div></div>
            </div>

            <div className="">
              <ScrollDetailsComponent />
            </div>
            <div>
              <ArrowPart />
            </div>

            <br className="lg:hidden"></br>
            <br className=" lg:hidden"></br>
            <div className="">
              <VideoPart />
            </div>
            <div className="h-[40px]">
              <BackgroundShape />
            </div>
            <br></br>
            <div className="z-0">
              <OurPartnersHeading />
            </div>
            <div className="h-70px">
              <PartnersHeading />
            </div>
            <br></br>
            <br></br>
            <footer>
              <FooterPart />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationDetailsPage;
