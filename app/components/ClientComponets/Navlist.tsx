import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowUp, MdExpandMore } from "react-icons/md";
import { LuTable2 } from "react-icons/lu";

const Navlist = () => {
  const [isUserManagementVisible, setIsUserManagementVisible] = useState(true);
  const [isPackageManagementVisible, setIsPackageManagementVisible] =
    useState(true);
  const [isBookingSectionVisible, setIsBookingSectionVisible] = useState(true);

  const toggleVisibility = (section: any) => {
    switch (section) {
      case "userManagement":
        setIsUserManagementVisible(!isUserManagementVisible);
        break;
      case "packageManagement":
        setIsPackageManagementVisible(!isPackageManagementVisible);
        break;
      case "bookingSection":
        setIsBookingSectionVisible(!isBookingSectionVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* usermanagement */}
      <div className="mt-8 border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 bg-white text-[14px] text-[#232323]">
        <div className="flex justify-between mb-2 nav-main">
          <div className="flex gap-2">
            <div>
              <FiUser className="mt-[2px] text-[16px]" />
            </div>
            <div className="font-bold">User Management</div>
          </div>
          <div>
            <div onClick={() => toggleVisibility("userManagement")}>
              {isUserManagementVisible ? (
                <MdKeyboardArrowUp className="text-[18px]" />
              ) : (
                <MdExpandMore className="text-[18px]" />
              )}
            </div>
          </div>
        </div>
        {isUserManagementVisible && (
          <ul>
            <li>All User Lists</li>
            <li>Add User</li>
          </ul>
        )}
      </div>

      {/* packagemanagement */}
      <div className="mt-3 border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 bg-white text-[14px] text-[#232323]">
        <div className="flex justify-between mb-2 nav-main">
          <div className="flex gap-2">
            <div>
              <LuTable2 className="mt-[2px] text-[16px]" />
            </div>
            <div className="font-bold">Package Management</div>
          </div>
          <div>
            <div onClick={() => toggleVisibility("packageManagement")}>
              {isPackageManagementVisible ? (
                <MdKeyboardArrowUp className="text-[18px]" />
              ) : (
                <MdExpandMore className="text-[18px]" />
              )}
            </div>
          </div>
        </div>
        {isPackageManagementVisible && (
          <ul>
            <li>All Package Lists</li>
            <li>Add Package</li>
          </ul>
        )}
      </div>

      {/* Booking section */}
      <div className="mt-3 border-b-[1px] border-dashed border-gray-200 pl-6 pr-5 bg-white text-[14px] text-[#232323]">
        <div className="flex justify-between mb-2 nav-main">
          <div className="flex gap-2">
            <div>
              <FiUser className="mt-[2px] text-[16px]" />
            </div>
            <div className="font-semibold">Booking Section</div>
          </div>
          <div>
            <div onClick={() => toggleVisibility("bookingSection")}>
              {isBookingSectionVisible ? (
                <MdKeyboardArrowUp className="text-[18px]" />
              ) : (
                <MdExpandMore className="text-[18px]" />
              )}
            </div>
          </div>
        </div>
        {isBookingSectionVisible && (
          <ul>
            <li>All Booking List</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navlist;
