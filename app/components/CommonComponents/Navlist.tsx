"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { LuTable2 } from "react-icons/lu";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const NavListDetails = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isCareerVisible, setIsCareerVisible] = useState(false);
  const [isPackageVisible, setPackageVisible] = useState(false);
  const [isBookingVisible, setBookingVisible] = useState(false);
  const [listButtonColor, setListButtonColor] = useState("black");
  const [packageButtonColor, setPackageButtonColor] = useState("black");
  const [bookingButtonColor, setBookingButtonColor] = useState("black");
  const [openSection, setOpenSection] = useState(null);

  const userManagement = () => {
    setIsListVisible(true);
    setPackageVisible(false);
    setBookingVisible(false);
    setPackageButtonColor("black");
    setBookingButtonColor("black");
  };

  const packageManagement = () => {
    setIsListVisible(false);
    setPackageVisible(true);
    setBookingVisible(false);
    setListButtonColor("black");
    setBookingButtonColor("black");
  };
  const bookingSection = () => {
    setIsListVisible(false);
    setPackageVisible(false);
    setBookingVisible(true);
    setListButtonColor("black");
    setPackageButtonColor("black");
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);

    setListButtonColor(isListVisible ? "#232323" : "#20B2AA");
  };

  const togglePackageVisibility = () => {
    setPackageVisible(!isPackageVisible);
    setPackageButtonColor(isPackageVisible ? "#232323" : "#20B2AA");
  };
  const toggleBookingVisibility = () => {
    setBookingVisible(!isBookingVisible);
    setBookingButtonColor(isBookingVisible ? "#232323" : "#20B2AA");
  };

  return (
    <>
      <div>
        <div className="mt-7 border-b-[1px] border-dashed border-gray-200 pl-6 pr-5  bg-white ">
          <button
            className="flex items-center py-[10px] w-full nav-button"
            style={{ color: listButtonColor }}
            onClick={toggleListVisibility}
          >
            <span className="flex gap-1 items-center w-full hover:text-[#20B2AA]">
              <span className="min-w-[25px] text-center">
                <FiUser className="text-[18px]" />
              </span>
              <div className="w-full flex  bg-white">
                <span className="font-semibold hover:pl-1  transition-all duration-300  ">
                  User Management
                </span>
              </div>
              <div>
                {isListVisible ? (
                  <MdKeyboardArrowUp className="text-[18px]" />
                ) : (
                  <MdExpandMore className="text-[18px]" />
                )}
              </div>
            </span>
          </button>

          {isListVisible && (
            <ul className="list-part pb-4">
              <li className="hover:pl-4" onClick={userManagement}>
                <Link href="/admin/users">All User Lists</Link>
              </li>
              <li className="hover:pl-4" onClick={userManagement}>
                <Link href="/admin/users/adduser">Add User</Link>
              </li>
            </ul>
          )}
        </div>

        <div className="border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 justify-between top-5 bg-white ">
          <button
            className=" flex items-center py-[10px] justify-between w-full nav-button"
            style={{ color: packageButtonColor }}
            onClick={togglePackageVisibility}
          >
            <span className="flex gap-[10px] items-center w-full hover:text-[#20B2AA]">
              <span>
                <FiUser className="text-[18px] " />
              </span>
              <div className="w-full flex justify-around hover:pl-[2px] transition-all duration-300 font-bold">
                <span className="">Package Management</span>
                <span className="pl-1">
                  {isPackageVisible ? (
                    <MdKeyboardArrowUp className="text-[18px]" />
                  ) : (
                    <MdExpandMore className="text-[18px]" />
                  )}
                </span>
              </div>
            </span>
          </button>

          {isPackageVisible && (
            <ul className="list-part pb-4">
              <li className="hover:pl-4 " onClick={packageManagement}>
                <Link href="/admin/package">All Package Lists</Link>
              </li>
              <li className="hover:pl-4" onClick={packageManagement}>
                <Link href="/admin/package/addpackage">Add Package</Link>
              </li>
            </ul>
          )}
        </div>

        <div className="border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 justify-between top-5 bg-white ">
          <button
            className=" flex items-center py-[10px] justify-between w-full nav-button"
            style={{ color: bookingButtonColor }}
            onClick={toggleBookingVisibility}
          >
            <span className="flex gap-1 items-center w-full hover:text-[#20B2AA]">
              <span>
                <LuTable2 className="text-center text-[17px] min-w-[25px] pr-1" />
              </span>
              <div className="w-full flex justify-between">
                <span className="font-bold hover:pl-1 transition-all duration-300 ">
                  Booking Section
                </span>
                <span>
                  {isBookingVisible ? (
                    <MdKeyboardArrowUp className="text-[18px]" />
                  ) : (
                    <MdExpandMore className="text-[18px]" />
                  )}
                </span>
              </div>
            </span>
          </button>

          {isBookingVisible && (
            <ul className="list-part pb-4">
              <li
                className="hover:text-[#029e9d] hover:pl-4"
                onClick={bookingSection}
              >
                <Link href="/admin/bookingsection">All Booking List</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NavListDetails;
