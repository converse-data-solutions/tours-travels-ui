"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/blogoffersimg1.jpg";
import img2 from "../../../public/blogoffersimg2.jpg";
import img3 from "../../../public/blogoffersimg3.jpg";
import { useState, useEffect } from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import user1 from "../../../public/bloguser1.jpg";
import user2 from "../../../public/bloguser2.jpg";
import user3 from "../../../public/bloguser3.jpg";

interface UserData {
  id: number;
  title: string;
  heading: string;
  content: string;

  name: string;
  file_name: any;
  image: any;
}

const mockData: UserData[] = [
  {
    id: 1,
    title: "Technology",
    heading: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

    name: "Sollmond Nell",
    file_name: img1,
    image: user1,
  },
  {
    id: 2,
    title: "Inspiration",
    heading: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

    name: "David Scott",
    file_name: img2,
    image: user2,
  },
  {
    id: 3,
    title: "Public",
    heading: "Services To Grow Your Business Sell Affiliate Products",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",

    name: "John Bolden",
    file_name: img3,
    image: user3,
  },
];

export default function BlogOffersCard() {
  const [data, setData] = useState<UserData[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  useEffect(() => {
    setData(mockData);
  }, []);

  const handleMouseOver = (id: number) => {
    setHoveredItemId(id);
  };

  const handleMouseOut = () => {
    setHoveredItemId(null);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 rounded-lg">
      {data.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg shadow-lg last-deal card-hover btn-fromLeft card-line   overflow-hidden ${
            hoveredItemId === item.id ? "lastminuteimg-hover" : ""
          }`}
          onMouseOver={() => handleMouseOver(item.id)}
          onMouseOut={handleMouseOut}
        >
          <div className="w-full h-full outerbox-image rounded-md blogoffer-card lastminuteimg-hover">
            <div className="outerbox-image rounded-t-md">
              <Image
                src={item.file_name}
                alt={item.title}
                height={200}
                width={300}
                className={`w-full lg:h-[25vh]  rounded-t-lg xl:w-full xl:h-[28vh] ${
                  hoveredItemId === item.id ? "image-hover" : ""
                }`}
              />
            </div>

            <div className="card_details1 pt-5 px-7">
              <div className="text-xl text-[hsl(180,82%,35%)] pb-2 font-serif font-semibold">
                {item.title}
              </div>
              <div className="font-serif font-semibold text-2xl pb-3 hover:text-[hsl(180,82%,35%)]">
                {item.heading}
              </div>
              <div className="text-[18px] text-gray-500 pb-3 font-sans pr-6 ">
                {item.content}
              </div>

              <div className="flex justify-between py-2">
                <div className="flex">
                  <div className="hover:overflow-hidden">
                    <Image
                      src={item.image}
                      alt="img"
                      height={100}
                      width={100}
                      className="h-10 w-10  rounded-full  "
                    />
                  </div>
                  <div className="font-sans text-gray-500 text-[16px] pb-1 flex pl-3 items-center">
                    {item.name}
                  </div>
                </div>
                <div>
                  <button className="bg-[#029e9d] text-white px-5 py-3 rounded-lg">
                    {" "}
                    Read More
                  </button>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
