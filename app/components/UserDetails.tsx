"use client";
import React, { useEffect, useState } from "react";

import apiConfiguration from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRepeat, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

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
        `${apiConfiguration.externalservice.backendUrl}/user/${decoded.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
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
  const profileForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className=" rounded-lg bg-white flex-col justify-center w-60 py-2">
          <div className="px-10  pb-4 flex-col justify-center">
            <div className="flex justify-center">
              <img
                className="h-24 w-24 rounded-full  "
                src={userData.file_name}
              />
            </div>
            <br></br>
            <div className="flex justify-center text-2xl font-bold">
              {userData.first_name}
            </div>
            <br></br>
            <div className="flex justify-center">{userData.email}</div>
            <br></br>
          </div>
          <hr></hr>
          <div className="px-10 py-4">
            <div onClick={profileForm}>
              <Link href={"/admin/users/profile/" + decoded.userId}>
                <span>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg pr-3 text-gray-500"
                  />
                </span>
                <span>Profile</span>
              </Link>
            </div>

            <div>
              {" "}
              <span>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="text-lg pr-1 text-gray-500"
                />
              </span>{" "}
              <span> Edit profile</span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="text-lg pr-2 text-gray-500"
                />
              </span>
              <span>Log Out</span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon
                  icon={faRepeat}
                  className="text-lg pr-2 text-gray-500"
                />
              </span>
              <span>Switch User</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailsForm;
