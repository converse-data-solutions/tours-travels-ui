import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Poppins, Playfair_Display } from "next/font/google";
import { SlLocationPin } from "react-icons/sl";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface CountyCardProps {
  item: {
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
  };
}

const CountyCard: React.FC<CountyCardProps> = ({ item }) => {
  return (
    <div className="rounded-lg shadow-lg p-7 bg-white w-full h-fit">
      <div className="w-full md:h-auto flex flex-col md:flex-row md:gap-6 md:justify-between">
        <div className="w-full md:w-3/12">
          <Image
            src={
              item.file_name || "/beautiful-green-field-scenery-free-photo.webp"
            }
            alt={item.title}
            height={200}
            width={300}
            className="w-full  h-full rounded-lg "
          />
        </div>
        <div className="md:flex md:items-center md:w-10/12 xl:w-9/12">
          <div className="flex flex-col text-center md:text-start md:w-1/2">
            <div
              className="text-[14px] text-[#777777] pt-6 md:pt-0"
              style={poppins.style}
            >
              6+ Hours | Full Day Tours
            </div>
            <div className="text-[26px] font-bold " style={playFair.style}>
              {item.title}
            </div>
            <div
              className="text-[16px] font-bold  flex justify-center lg:justify-start lg:flex-row gap-1 "
              style={playFair.style}
            >
              <div className="text-[#029e9d] text-[16px] pt-1 ">
                <SlLocationPin />
              </div>
              <div className="text-[#029e9d]">{item.state}</div>
            </div>
            <div
              className="text-[16px] text-[#777777] pt-8"
              style={poppins.style}
            >
              Taking Safety Measures
            </div>
            <div className="text-[16px] text-[#029e9d]" style={poppins.style}>
              Free cancellation
            </div>
          </div>
          <div className="flex flex-col text-center md:text-end md:w-1/2">
            <div className="text-[#fbbc06]  pb-1  ">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  style={{ color: "#fbbc06", marginRight: "5px" }}
                />
              ))}{" "}
            </div>
            <div
              className="text-[14px] text-[#777777] pb-6"
              style={poppins.style}
            >
              200 Reviews
            </div>
            <div className="text-[16px] text-[#777777]" style={poppins.style}>
              From
            </div>
            <div className="text-[26px] font-bold " style={playFair.style}>
              ${item.price}
            </div>
            <div>Per Adult</div>
            <div
              className="text-[14px] text-[#777777] flex justify-center md:justify-end pt-5"
              style={poppins.style}
            >
              <button className="py-3 px-5 hovering-button text-white rounded-lg">
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountyCard;
