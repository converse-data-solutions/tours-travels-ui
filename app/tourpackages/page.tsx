// 
'use client'
import React from 'react';
import Image from 'next/image';
import img from '../../public/beautiful-green-field-scenery-free-photo.webp';
import { useState,useEffect } from 'react';
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
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

export default function Card() {

  const [windowWidth, setWindowWidth] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      window.location.reload()
      setWindowWidth(1);
    } else if (screenWidth <= 768) {
      setWindowWidth(1);
    } else if (screenWidth <= 1024) {
      setWindowWidth(2);
    } else {
      setWindowWidth(4);
    }
  }, []);

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
 
  const filteredData = data.filter((item) => item.published === 1);
  
  return (
    <div className=" w-full  flex flex-wrap gap-7 bg-white ">
    {filteredData.map((item) => (
      <div key={item.id} className='rounded-lg shadow-lg'>
        <div className="h-[70vh] w-full lg:w-[410px] lg:h-[60vh] ">
          <Image
            src={item.file_name || img}
            alt={item.title}
            height={200}
            width={300}
            className='w-full h-[25vh] rounded-t-lg'
          />
         <button className='bg-[hsl(180,82%,35%)] relative top-[-35px] text-lg ml-[200px] px-2 h-[55px]  text-white font-bold rounded-lg'><FontAwesomeIcon icon={faCalendarAlt}/> {item.days_and_night}</button>
         
          <div className="card_details1 p-7">
            <div className="text-xl text-[hsl(180,82%,35%)] pb-1">{item.country}</div>
            <div className="font-bold text-2xl pb-1">{item.state}</div>
            <div className="text-[#fbbc06] text-xl pb-1 ">
                    
                     
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={index < item.id? faStar : ["far", "star"]} 
                        style={{ color: "#fbbc06" }}
                      />
                    ))}     <span className="text-gray-700 text-xl">(12)</span>               
                    </div>
            
                    <span className='text-xl pb-6 '><div dangerouslySetInnerHTML={{ __html: item.description }}></div></span> <br></br>
                    
                    
         
          <hr className='w-full border-gray-200 border-dashed '></hr>
                    
                    <div className=" text-[hsl(180,82%,35%)] pt-2"><span className='text-lg font-bold '>{item.price} </span><span className='text-gray-700  font-thin'>&nbsp;|&nbsp;PerPerson</span></div>
                    </div>
        </div>
      </div>
      ))}
    
    
    
  </div>
  
    
  );
}
