"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { LuTable2 } from "react-icons/lu";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { usePathname } from "next/navigation";

type ListDetails = {
  category: string;
  subcategory: string;
};
type NavListDetailsProps = {
  onListClick: (listDetails: any) => void;
  parent: ListDetails | null;
  children: ListDetails[];
  activeCategory: string | null;
  activeSubcategory: string | null;
  showIconsOnly: boolean;
};

const NavListDetails: React.FC<NavListDetailsProps> = ({
  onListClick,
  parent,
  children,
  activeCategory,
  activeSubcategory,
  showIconsOnly,
}) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isPackageVisible, setPackageVisible] = useState(false);
  const [isBookingVisible, setBookingVisible] = useState(false);
  const [listButtonColor, setListButtonColor] = useState("#232323");
  const [packageButtonColor, setPackageButtonColor] = useState("#232323");
  const [bookingButtonColor, setBookingButtonColor] = useState("#232323");
  const [navActive, setNavActive] = useState<ListDetails>();
  const [activeList, setActiveList] = useState<ListDetails | null>(null);
  const [subCategoryColor, setSubCategoryColor] = useState<string>("#029e9d");
 

  const pathname = usePathname();
  
 
  const userManagement1 = () => {
    setIsListVisible(true);
    setPackageVisible(false);
    setBookingVisible(false);
    setPackageButtonColor("#232323");
    setBookingButtonColor("#232323");
    const listDetails = {
      category: "User Management",
      subcategory: "All User Lists",
    };
    setNavActive(listDetails);
    onListClick(listDetails);
    setListButtonColor("#029e9d")
  };

  const userManagement2 = () => {
    setIsListVisible(true);
    setPackageVisible(false);
    setBookingVisible(false);
    setPackageButtonColor("#232323");
    setBookingButtonColor("#232323");
    const listDetails = {
      category: "User Management",
      subcategory: "Add User",
    };
    setNavActive(listDetails);
    onListClick(listDetails);
  };

  const packageManagement1 = () => {
    setIsListVisible(false);
    setPackageVisible(true);
    setBookingVisible(false);
    setListButtonColor("#232323");
    setBookingButtonColor("#232323");
    const listDetails = {
      category: "Package Management",
      subcategory: "All Package Lists",
    };
    setNavActive(listDetails);
    onListClick(listDetails);
  };

  const packageManagement2 = () => {
    setIsListVisible(false);
    setPackageVisible(true);
    setBookingVisible(false);
    setListButtonColor("#232323");
    setBookingButtonColor("#232323");
    const listDetails = {
      category: "Package Management",
      subcategory: "Add Package",
    };
    setNavActive(listDetails);
    onListClick(listDetails);
  };

  const bookingSection = () => {
    setIsListVisible(false);
    setPackageVisible(false);
    setBookingVisible(true);
    setListButtonColor("#232323");
    setPackageButtonColor("#232323");
    const listDetails = {
      category: "Booking Section",
      subcategory: "All Booking List",
    };
    setNavActive(listDetails);
    onListClick(listDetails);
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);

    setListButtonColor(isListVisible ? "#232323" : "#029e9d");
  };

  const togglePackageVisibility = () => {
    setPackageVisible(!isPackageVisible);
    setPackageButtonColor(isPackageVisible ? "#232323" : "#029e9d");
  };
  const toggleBookingVisibility = () => {
    setBookingVisible(!isBookingVisible);
    setBookingButtonColor(isBookingVisible ? "#232323" : "#029e9d");
  };

  useEffect(() => {
    if (!activeCategory && !activeSubcategory && children.length > 0) {
      const defaultListDetails = children[0];
      onListClick(defaultListDetails);
    }
  }, [activeCategory, activeSubcategory, children, onListClick]);

  useEffect(() => {
    if (!navActive || !navActive.category) {
      setIsListVisible(true);
      setPackageVisible(false);
      setBookingVisible(false);
       setListButtonColor('#029e9d')
    } else if (navActive.category === "User Management") {
      setIsListVisible(true);
      setPackageVisible(false);
      setBookingVisible(false);
      setListButtonColor("#029e9d");
    } else if (navActive.category === "Package Management") {
      setIsListVisible(false);
      setPackageVisible(true);
      setBookingVisible(false);
      setPackageButtonColor("#029e9d");
    } else if (navActive.category === "Booking Section") {
      setIsListVisible(false);
      setPackageVisible(false);
      setBookingVisible(true);
      setBookingButtonColor("#029e9d");
    }
  }, [navActive]);

  useEffect(() => {
    const [, category, subcategory] = pathname.split("/");

    if (pathname === "/admin/package") {
      setNavActive({
        category: "Package Management",
        subcategory: "All Package Lists",
      });
    } else if (pathname === "/admin/package/addpackage") {
      setNavActive({
        category: "Package Management",
        subcategory: "Add Package",
      });
    } else if (pathname === "/admin/users") {
      setNavActive({
        category: "User Management",
        subcategory: "All User Lists",
      });
    } else if (pathname === "/admin/users/adduser") {
      setNavActive({
        category: "User Management",
        subcategory: "Add User",
      });
    } else if (pathname === "/admin/bookingsection") {
      setNavActive({
        category: "Booking Section",
        subcategory: "All Booking List",
      });
    } else {
      setNavActive({ category, subcategory });
    }
  }, [pathname]);

  return (
    <>
      <div className="nav-transition ">
        <div className="mt-7 border-b-[1px] border-dashed border-gray-200 pl-6 pr-5  bg-white ">
          <button
            className="flex items-center py-[10px] w-full nav-button"
            style={{ color: listButtonColor }}
            onClick={toggleListVisibility}
          >
            {showIconsOnly ? (
              <span className="flex gap-1 items-center w-full hover:text-[#029e9d]">
                <div className="min-w-[25px] text-center">
                  <FiUser
                    className={`text-[18px] ${
                      (activeCategory === "User Management" &&
                        activeSubcategory === "All User Lists") ||
                      activeSubcategory === "Add User"
                        ? "text-[#20B2AA]"
                        : "text-[#232323]"
                    }`}
                  />{" "}
                </div>
              </span>
            ) : (
              <span className="flex gap-1 items-center w-full hover:text-[#029e9d]">
                <div className="min-w-[25px] text-center">
                  <FiUser className="text-[18px]" />
                </div>
                <div className="w-full flex  bg-white ">
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
            )}
          </button>
          {!showIconsOnly && (
            <div>
              {isListVisible && (
                <ul className="list-part pb-4">
                  <li
                    className={`hover:pl-4 text-[#232323] ${
                      navActive?.subcategory === "All User Lists"
                        ? "active-list"
                        : ""
                    }`}
                    onClick={userManagement1}
                  >
                    <Link href="/admin/users">All User Lists</Link>
                  </li>
                  <li
                    className={`hover:pl-4 text-[#232323] ${
                      navActive?.subcategory === "Add User" ? "active-list" : ""
                    }`}
                    onClick={userManagement2}
                  >
                    <Link href="/admin/users/adduser">Add User</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 justify-between top-5 bg-white ">
          <button
            className=" flex items-center py-[10px] justify-between w-full nav-button"
            style={{ color: packageButtonColor }}
            onClick={togglePackageVisibility}
          >
            {showIconsOnly ? (
              <span className="flex gap-[10px] items-center w-full hover:text-[#029e9d]">
                <span>
                  <FiUser
                    className={`text-[18px] ${
                      (activeCategory === "Package Management" &&
                        activeSubcategory === "All Package Lists") ||
                      activeSubcategory === "Add Package"
                        ? "text-[#029e9d]"
                        : "text-[#232323]"
                    }`}
                  />{" "}
                </span>
              </span>
            ) : (
              <span className="flex gap-[10px] items-center w-full  hover:text-[#029e9d]">
                <span>
                  <FiUser className="text-[18px] " />
                </span>
                <div className="w-full flex justify-around hover:pl-[2px] transition-all duration-300 font-bold ">
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
            )}
          </button>

          {!showIconsOnly && (
            <div>
              {" "}
              {isPackageVisible && (
                <ul className="list-part pb-4">
                  <li
                    className={`hover:pl-4 text-[#232323] ${
                      navActive?.subcategory === "All Package Lists"
                        ? "active-list"
                        : ""
                    }`}
                    onClick={packageManagement1}
                  >
                    <Link href="/admin/package">All Package Lists</Link>
                  </li>
                  <li
                    className={`hover:pl-4  text-[#232323] ${
                      navActive?.subcategory === "Add Package"
                        ? "active-list"
                        : ""
                    }`}
                    onClick={packageManagement2}
                  >
                    <Link href="/admin/package/addpackage">Add Package</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 justify-between top-5 bg-white ">
          <button
            className=" flex items-center py-[10px] justify-between w-full nav-button"
            style={{ color: bookingButtonColor }}
            onClick={toggleBookingVisibility}
          >
            {showIconsOnly ? (
              <span className="flex gap-1 items-center w-full hover:text-[#20B2AA]">
                <span>
                  <LuTable2
                    className={`text-[18px] ${
                      activeCategory === "Booking Section" &&
                      activeSubcategory === "All Booking List"
                        ? "text-[#029e9d]"
                        : "text-[#232323]"
                    }`}
                  />
                </span>
              </span>
            ) : (
              <span className="flex gap-1 items-center w-full  hover:text-[#029e9d]">
                <span>
                  <LuTable2 className="text-center text-[17px] min-w-[25px] pr-1" />
                </span>
                <div className="w-full flex justify-between ">
                  <span className="font-bold hover:pl-1 transition-all duration-300  ">
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
            )}
          </button>

          {!showIconsOnly && (
            <div>
              {isBookingVisible && (
                <ul className="list-part pb-4">
                  <li
                    className={`hover:text-[#029e9d] text-[#232323] hover:pl-4 ${
                      navActive?.subcategory === "All Booking List"
                        ? "active-list"
                        : ""
                    }`}
                    onClick={bookingSection}
                  >
                    <Link href="/admin/bookingsection">All Booking List</Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavListDetails;
