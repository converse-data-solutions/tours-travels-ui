"use client";
import React, { useState, useEffect } from "react";
import CountyCard from "@/app/components/ClientComponets/CountryCard";

import { Playfair_Display, Poppins } from "next/font/google";
import { CountryGridCard } from "@/app/components/ClientComponets/CountryGridCard";

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
}

const CountryDetailsPage: React.FC<CountyDetailsPageProps> = ({ params }) => {
  const [data, setData] = useState<UserData[]>([]);
  const countryName = params.country;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        const userDataArray = responseData.data;
        setData(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const filteredData = data.filter(
    (item) => item.country.toLowerCase() === countryName.toLowerCase(),
  );

  return (
    <>
      <div>
        {filteredData.map((item) => (
          <div className="py-7 relative xl:top-[-250px]">
            <CountyCard key={item.id} item={item} />
          </div>
        ))}
      </div>

      {/* <div>
        
          
         
            {filteredData.map((item) => (
              <div className="py-7 relative xl:top-[-250px]"><CountryGridCard  item={item} /></div>
            ))}
          </div> */}
    </>
  );
};

export default CountryDetailsPage;
