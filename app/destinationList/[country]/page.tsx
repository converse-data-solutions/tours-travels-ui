"use client";
import React, { useState, useEffect,ReactNode } from "react";
import CountyCard from "@/app/components/ClientComponets/CountryCard";
import Image from "next/image";
import img from "../../../public/booknowpageimg.jpg";
import { HomePage } from "@/app/components/CommonComponents/HomePage";
import BackgroundShape from "@/app/components/ServerComponents/BackgroundShape8";

import { Playfair_Display, Poppins } from "next/font/google";
import ScrollDetailsComponent from "@/app/components/ClientComponets/ScrollDetails";
import ArrowPart from "@/app/components/ClientComponets/ArrowPart";
import CategoriesType from "@/app/components/ServerComponents/CategoriesType";
import DurationType from "@/app/components/ServerComponents/DurationType";
import DurationRange from "@/app/components/ServerComponents/DurationRange";
import TopdestinationRightCard from "@/app/components/ClientComponets/DestinationRightCard";
import GridAndFilter from "@/app/components/ClientComponets/GridAndFilter";
import VideoPart from "@/app/homepage/VideoPart";
import OurPartnersHeading from "@/app/components/ServerComponents/OurPartnersHeading";
import PartnersHeading from "@/app/homepage/OurPartners";
import FooterPart from "@/app/components/CommonComponents/FooterPart";
import CountryDetailsPage from "./ListCardDetails";
import CountryGridDetailsPage from "./GridCardDetails";
const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

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

interface CountyDetailsPageProps {
  params: {
    country: string;
    
  };
  children?: ReactNode;
}

const CountyDetailsPage: React.FC<CountyDetailsPageProps> = ({ params }: { params: {country: string} }) => {
  const [data, setData] = useState<UserData[]>([]);
  const countryName = params.country;
  const [currentView, setCurrentView] = useState('bars');
  
  const handleButtonClick = (buttonType: string) => {
    if (buttonType === 'grid') {
      setCurrentView('grid');
    } else if (buttonType === 'bars') {
      setCurrentView('bars');
    }
    console.log(`Button clicked: ${buttonType}`);
  };


  return (
    <>
      <div>
        <Image
          height={100}
          width={1000}
          src={img}
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
              TOUR LIST
            </div>
            <div
              className="text-center text-[16px]"
              style={{ ...poppins.style }}
            >
              <span className="text-[#029e9d]" style={{ ...poppins.style }}>
                Home{" "}
              </span>{" "}
              <span className="text-white  px-2 md:px-5">|</span>{" "}
              <span
                className="text-white text-bold"
                style={{ ...poppins.style }}
              >
                Tour Lists Leftside
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="relative top-[25px] md:top-[-20px] lg:top-[35px] xl:top-[0px]">
            <BackgroundShape />
          </div>
          <div>
            <ScrollDetailsComponent />
          </div>
          <div>
            <ArrowPart />
          </div>
          
          <div className="flex flex-col lg:flex-row xl:px-[16%]">
          
          <div  className="w-full flex flex-wrap gap-7 bg-white px-4 ">
          <div className="w-[100%]"><GridAndFilter onButtonClick={handleButtonClick}/></div>
          <div>
          {currentView === 'grid' ? (
            <CountryGridDetailsPage params={{ country: countryName }} />
          ) : (
            <CountryDetailsPage params={{ country: countryName }} />
          )}
      </div>
          </div>

          <div className="flex flex-col lg:w-5/12">
           <div className=""><CategoriesType/></div>
           <br></br>
           <span className="border-t-2 border-dashed "></span>
           <br></br>
           <div className=""><DurationType/></div>
           <br></br>
           <span className="border-t-2 border-dashed "></span>
           <br></br>

           <div><DurationRange/></div>
           <br></br>
           <span className="border-t-2 border-dashed "></span>
           <br></br>
           <div className="w-[100%]"><TopdestinationRightCard/></div>

           </div>
          </div>
        </div>
          
        <div><VideoPart/></div>
        
        <div><BackgroundShape/></div>
        <div className="bg-white relative  top-[-100px]  pt-10">
        <div className="pb-6 ">
        <OurPartnersHeading/>
      </div>
      <div className="">
        <PartnersHeading/>
      </div>
      <br></br>
      </div>
      <div className="relative  top-[-120px]"><FooterPart/></div>
      </div>
    </>
  );
};

export default CountyDetailsPage;
