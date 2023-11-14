"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  PersonOutline as PersonOutlineIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  WorkOutline as WorkOutlineIcon,
} from "@mui/icons-material";

const NavListDetails = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isCareerVisible, setIsCareerVisible] = useState(false);
  const [isPackageVisible,setPackageVisible]=useState(false);
  const [listButtonColor, setListButtonColor] = useState("black");
  const [careerButtonColor, setCareerButtonColor] = useState("black");
  const [packageButtonColor,setPackageButtonColor]=useState("black")

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);

    setListButtonColor(isListVisible ? "#232323" : "#20B2AA");
  };
  const toggleCareerVisibility = () => {
    setIsCareerVisible(!isCareerVisible);

    setCareerButtonColor(isCareerVisible ? "#232323" : "#20B2AA");
  };
  const togglePackageVisibility=()=>{
    setPackageVisible(!isPackageVisible);
    setPackageButtonColor(isPackageVisible ? "#232323" : "#20B2AA");
  }

  return (
    <div>
      <div className="mt-4 border-b-[1px] border-dashed border-gray-200 px-3 justify-between bg-white">
        <button
          className="flex items-center py-[10px] w-full nav-button"
          style={{ color: listButtonColor }}
          onClick={toggleListVisibility}
        >
          <span className="flex gap-3 items-center w-full">
            <span className="min-w-[25px] text-center">
              <PersonOutlineIcon />
            </span>
            <div className="w-full flex justify-between bg-white">
              <span className="font-medium">User Management</span>
              <span>
                {isListVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            </div>
          </span>
        </button>

        {isListVisible && (
          <ul className="bullet-list">
            <li>
              <Link href="/admin/users">All User Lists</Link>
            </li>
            <li>
              <Link href="/admin/users/adduser">Add User</Link>
            </li>
          </ul>
        )}
      </div>

      <div className="border-b-[1px] border-dashed border-gray-200 px-3 justify-between top-5 bg-white ">
        <button
          className="nav-button flex items-center py-[10px] justify-between w-full"
          style={{ color: careerButtonColor }}
          onClick={toggleCareerVisibility}
        >
          <span className="flex gap-3 items-center w-full">
            <span>
              <WorkOutlineIcon className="min-w-[25px] text-center" />
            </span>
            <div className="w-full flex justify-between">
              <span className="font-medium">Career Management</span>
              <span>
                {isCareerVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            </div>
          </span>
        </button>

        {isCareerVisible && (
          <ul className="bullet-list">
            <li>All Job vacancies</li>
            <li>Add Job Vacancy</li>
            <li>All Candidate List</li>
          </ul>
        )}
      </div>

      <div className="border-b-[1px] border-dashed border-gray-200 px-3 justify-between top-5 bg-white ">
        <button
          className="nav-button flex items-center py-[10px] justify-between w-full"
          style={{ color: packageButtonColor }}
          onClick={togglePackageVisibility}
        >
          <span className="flex gap-3 items-center w-full">
            <span>
              <PersonOutlineIcon  className="min-w-[25px] text-center" />
            </span>
            <div className="w-full flex justify-between">
              <span className="font-medium">Package Management</span>
              <span>
                {isPackageVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            </div>
          </span>
        </button>

        {isPackageVisible && (
          <ul className="bullet-list">
            <li><Link href="/admin/package">All Package Lists</Link></li>
            <li><Link href="/admin/package/addpackage">Add Package</Link></li>
           
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavListDetails;
