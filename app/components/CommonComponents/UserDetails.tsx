"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import AlternateImg from "../../../public/bloguser2.jpg";
import { FiUser } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiRepeat } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

type UserData = {
  first_name: string;
  email: string;
  file_name: any;
};

const UserDetailsForm = () => {
  const [userData, setUserData] = useState<UserData>({
    first_name: "",
    email: "",
    file_name: "",
  });
  const token: any = localStorage.getItem("accessToken");
  const decoded: any = jwtDecode(token);

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
          if (response.status === 200) {
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
  }, [decoded.userId, token]);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div className=" rounded-xl bg-white flex-col justify-center w-60 py-2 z-50">
          <div className="triangle-outline"></div>
          <div className="px-5 pt-2 pb-4 flex-col justify-center">
            <div className="flex justify-center">
              {userData.file_name === null ||
              userData.file_name === undefined ? (
                <Image
                  src={AlternateImg}
                  className="rounded-full h-20 w-20"
                  alt=""
                  height={50}
                  width={50}
                />
              ) : (
                <Image
                  src={AlternateImg}
                  className="rounded-full h-20 w-20"
                  alt=""
                  height={50}
                  width={50}
                />
              )}
            </div>
            <br></br>
            <div className="flex justify-center text-[16px] font-bold">
              {userData.first_name}
            </div>
            <div className="flex justify-center text-[12px]">
              {userData.email}
            </div>
          </div>
          <hr></hr>
          <div className="pt-1">
            <ul className="custom-ul">
              <li>
                {" "}
                <div className="flex flex-row hover:text-[#029e9d]">
                  <Link href={"/admin/users/profile/" + decoded.userId}>
                    <div className="flex flex-row py-2" onClick={()=>setIsVisible(false)}>
                     <div className="iconuser">
                        <FiUser className="mt-[2px] hover:text-[#029e9d] text-[16px]" />
                      </div>
                      <div className="pl-3 userdetail  text-[12.992px]">Profile</div>
                     
                    </div>
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex flex-row py-2">
                  {" "}
                  <div className="iconuser">
                    <FiEdit className="mt-[2px]  text-[16px]" />
                  </div>
                  <div className="pl-3 userdetail text-[12.992px]"> Edit profile</div>
                </div>
              </li>
              
              <li>
                <div className="flex flex-row  ">
                  <div className="mt-[7px] hover:text-[#029e9d] iconuser text-[16px]">
                    <FiRepeat />
                  </div>
                  <div className="py-1 pl-3 userdetail text-[12.992px]">Switch User</div>
                </div>
              </li>

              <li>
                <div className="flex flex-row py-2">
                  <div className="mt-[2px]  hover:text-[#029e9d] iconuser text-[16px]">
                    <MdOutlineLogout className="text-[16px]" />
                  </div>
                  <div
                    className="pl-3 userdetail text-[12.992px]"
                    onClick={async () => {
                      localStorage.removeItem("accessToken");
                      alert("You are signed out successfully!");
                      await signOut();
                      localStorage.removeItem("refreshToken");
                      window.location.replace("/");
                    }}
                  >
                    Log Out
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailsForm;
