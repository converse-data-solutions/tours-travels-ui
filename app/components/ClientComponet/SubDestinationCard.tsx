"use client";
import React, { useState } from "react";
import Image from "next/image";

import img from "../../../public/subdestination3.jpg";

export const SubDestinationCard = () => {
  const [userData, setUserData] = useState<any[]>([]);

  return (
    <div>
      {userData.map((item) => (
        <div key={item.id}>
          <Image
            src={img}
            className="h-auto w-full rounded-lg"
            height={100}
            width={1000}
            alt="Image"
          />

          <div className="relative top-[-100px] flex flex-row justify-between px-6">
            <div className="flex flex-col">
              <div className="text-[20px] text-[#FDC703]">{item.country}</div>
              <div className="text-white text-[26px]">{item.state}</div>
            </div>

            <div className="items-center flex">
              <button className="text-white bg-[#029E9D] rounded-lg px-2 py-1">
                {item.id} Tours
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
