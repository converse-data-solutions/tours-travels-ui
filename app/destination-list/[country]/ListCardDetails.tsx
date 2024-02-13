"use client";
import React, { useState, useEffect } from "react";
import CountyCard from "@/app/components/ClientComponets/CountryCard";

import { Playfair_Display, Poppins } from "next/font/google";
import { CountryGridCard } from "@/app/components/ClientComponets/CountryGridCard";
import { FaLongArrowAltRight } from "react-icons/fa";
const playFair = Playfair_Display({
  subsets: ["latin"],
});
import Link from "next/link";

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
  category: string;
  duration: string;
}

interface DetailsPageProps {
  params: {
    country: string;
  };
  query?: {
    category: string | null;
    duration: string | null;
    price?: string | null;
  };
}

const CountryDetailsPage: React.FC<DetailsPageProps> = ({ params, query }) => {
  const [data, setData] = useState<UserData[]>([]);
  const countryName = params.country;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    let apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/filter/${countryName}`;

    if (query?.category) {
      apiUrl += `?category=${query.category}`;
    }

    if (query?.duration) {
      apiUrl += `${apiUrl.includes("?") ? "&" : "?"}days_and_night=${
        query.duration
      }`;
    }
    if (query?.price) {
      apiUrl += `${apiUrl.includes("?") ? "&" : "?"}price=${query.price}`;
    }

    fetch(apiUrl, {
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

  const handleClick = (id: number) => {};

  return (
    <>
      <div>
        {data.map((item) => (
          <Link key={item.id} href={`/homepage/${item.id}`}>
            {" "}
            <div
              className="py-7 relative xl:top-[-50px]"
              onClick={() => handleClick(item.id)}
            >
              <CountyCard key={item.id} item={item} />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="booking text-white px-5 py-3 rounded-lg"
          style={poppins.style}
        >
          <div className="flex flex-row">
            {" "}
            <div>Load More </div>
            <div className=" ml-1 mt-1">
              <FaLongArrowAltRight />
            </div>
          </div>
        </button>{" "}
      </div>
    </>
  );
};

export default CountryDetailsPage;
