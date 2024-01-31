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
import { GetServerSideProps } from "next";


const playFair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});

const poppins = Poppins({
   weight: "400",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
});


const Page= () => {
  return (
    <>
      <div className="Destination-part  ">
        <div className="z-40 bg-white relative">
          <div className="">
            <Image
              height={100}
              width={1000}
              src={backgroundImage}
              alt=""
              className=" h-[80vh] w-[100%]  lg:h-[130vh] lg:w-screen z-[-10] fixed top-[45px] brightness-[40%]"
            />
            <div className="z-40 bg-white relative ">
              <HomePage />
            </div>

            <div className="lg:h-full h-[320px]  lg:py-[10%] w-full flex justify-center items-center xl:py-[5.6%] ">
              <div className="flex-col">
                <div
                  className="text-white text-center text-[26px] lg:text-[56px] font-semibold"
                  style={{ ...playFair.style }}
                >
                  DESTINATION LIST
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

            <div className="bg-white z-40 relative">
              <div className="relative md:top-[-20px] lg:top-[35px] xl:top-[10px]">
                <BackgroundShape />
              </div>

              <div className="xl:px-[20%] xl:top-[-50px] xl:relative">
                <TopDestinations />
              </div>
              <div className="xl:px-[16%]">
                <WholeDestinationCard />
              </div>

              <div>
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
              <div>
                <OurPartnersHeading />
              </div>
              <div className="h-70px">
                <PartnersHeading />
              </div>
              <br></br>
              <br></br>
            </div>
            <footer className="z-0 relative top-[-5px]">
              <FooterPart />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;


