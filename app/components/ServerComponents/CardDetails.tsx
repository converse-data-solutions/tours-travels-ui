import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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

const CardDetails: React.FC<{ item: UserData }> = ({ item }) => (
  <div className="card_details1 py- px-7">
    <div className="text-xl text-[hsl(180,82%,35%)] pb-2 font-serif font-semibold">
      {item.country}
    </div>
    <div className="font-serif font-semibold text-2xl pb-1">{item.state}</div>
    <div className="text-[#fbbc06] lg:text-xl pb-1  ">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < item.id ? faStar : ["far", "star"]}
          style={{ color: "#fbbc06", gap: "1" }}
        />
      ))}
      <span className="text-gray-700 text-xl">(12)</span>
    </div>
    <span className="text-[16px] pb-6 text-gray-500 font-serif ">
      <div
        dangerouslySetInnerHTML={{ __html: item.description }}
        className="h-[50px]"
      ></div>
    </span>{" "}
    <br></br>
    <hr className="w-[100%] border-gray-200 border-dashed "></hr>
    <div className=" text-[hsl(187,82%,35%)] pt-2 pb-5">
      <span className="text-xl font-extrabold ">${item.price} </span>
      <span className="text-gray-700  font-thin">&nbsp;|&nbsp;Per person</span>
    </div>
  </div>
);

export default CardDetails;
