"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AddUser from "../../adduser/AddUser";
import Link from "next/link";
import Image from "next/image";
import AlternateImg from "../../../../../public/alternative.png";

type UserData = {
  email: string;
  password: string;
  mobile_number: string;
  first_name: string;
  last_name: string;
  country: string;
  gender: string;
  address: string;
  social_media_link: string;
  file_name: File | any;
  default_currency: string;
  default_language: string;
  role_id: string;
  created_at: string;
};

const ProfileEditingPage = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    mobile_number: "",
    first_name: "",
    last_name: "",
    country: "",
    gender: "",
    address: "",
    social_media_link: "",
    file_name: "",
    default_currency: "",
    default_language: "",
    role_id: "",
    created_at: "",
  });
  const token: any = localStorage.getItem("accessToken");
  const decoded: any = jwtDecode(token);
  const id: number = decoded.userId;

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/${decoded.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      )
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((Apidata) => {
          setUserData({ ...Apidata.data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    {
      const token = localStorage.getItem("accessToken");
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/${decoded.userId}}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(async (response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(`Error fetching user data: ${response.status}`);
          }
        })
        .then((getApiData) => {
          setUserData({
            ...getApiData.data,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <div className=" rounded-lg bg-white flex-col justify-center w-full px-5 py-2 shadow-md">
      <div className="flex justify-start py-5 px-10 gap-10 w-full h-[7vh] rounded-lg shadow-md  sticky z-10 bg-white">
        {userData.file_name === null || userData.file_name === undefined ? (
          <Image
            src={AlternateImg}
            className="rounded-md h-10 w-10"
            alt={"img"}
            height={30}
            width={50}
          />
        ) : (
          <Image
            src={userData.file_name}
            className="rounded-md h-10 w-10"
            alt="img"
            height={30}
            width={50}
          />
        )}
        <br></br>
        <div>{userData.first_name}</div>
        <div>{userData.email}</div>
      </div>
      <div className=" justify-between py-5 lg:flex flex-row lg:gap-3">
        <div className="w-full lg:w-5/12 pt-10 px-5 rounded-lg shadow-md">
          {userData.created_at && (
            <div>
              <div className="font-bold">JOINED:</div>
              <div>{userData.created_at}</div> <br></br>
            </div>
          )}
          {userData.address && (
            <div>
              <div className="font-bold">ADDRESS:</div>
              <div>{userData.address}</div> <br></br>
            </div>
          )}
          {userData.email && (
            <div>
              <div className="font-bold">EMAIL:</div>
              <div>{userData.email}</div> <br></br>
            </div>
          )}
          {userData.mobile_number && (
            <div>
              <div className="font-bold">PHONE NO.:</div>
              <div>{userData.mobile_number}</div> <br></br>
            </div>
          )}
          {userData.social_media_link && (
            <div>
              <div className="font-bold">WEBSITE:</div>
              <div>{userData.social_media_link}</div> <br></br>
            </div>
          )}
          {userData.default_language && (
            <div>
              <div className="font-bold">LANGUAGE:</div>
              <div>{userData.default_language}</div> <br></br>
            </div>
          )}
        </div>

        <div className=" w-full lg:w-7/12  rounded-lg shadow-md">
          <div className=" bg-white">
            <AddUser isEditMode={true} isHeadpart={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileEditingPage;
