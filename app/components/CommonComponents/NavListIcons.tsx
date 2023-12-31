import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

const NavlistIcons = () => {
  const [listButtonColor, setListButtonColor] = useState("black");

  const [careerButtonColor, setCareerButtonColor] = useState("black");

  const [packageButtonColor, setPackageButtonColor] = useState("black");

  const [bookingButtonColor, setBookingButtonColor] = useState("black");

  const toggleListVisibility = () => {
    setListButtonColor((prevColor) =>
      prevColor === "#232323" ? "#20B2AA" : "#232323",
    );
  };

  const toggleCareerVisibility = () => {
    setCareerButtonColor((prevColor) =>
      prevColor === "#232323" ? "#20B2AA" : "#232323",
    );
  };

  const togglePackageVisibility = () => {
    setPackageButtonColor((prevColor) =>
      prevColor === "#232323" ? "#20B2AA" : "#232323",
    );
  };

  const toggleBookingVisibility = () => {
    setBookingButtonColor((prevColor) =>
      prevColor === "#232323" ? "#20B2AA" : "#232323",
    );
  };

  return (
    <>
      <div className="pt-[25px] border-b-[1px] border-dashed border-gray-200">
        <button
          className=" px-[20px] flex items-center py-[10px] w-full  nav-button"
          style={{ color: listButtonColor }}
          onClick={toggleListVisibility}
        >
          <span className="flex gap-3 items-center w-full">
            <span className="min-w-[25px] text-center">
              <PersonOutlineIcon />
            </span>
          </span>
        </button>
      </div>
      {/* candidate */}
      <div className="border-b-[1px] border-dashed border-gray-200">
        <button
          className=" px-[20px] nav-button flex items-center py-[10px] justify-betweenc w-full nav-button"
          onClick={toggleCareerVisibility}
          style={{ color: careerButtonColor }}
        >
          <span className="flex gap-3 items-center w-full">
            <span className="min-w-[25px] text-center ">
              <WorkOutlineIcon />
            </span>
          </span>
        </button>
      </div>

      <div className=" border-b-[1px] border-dashed border-gray-200">
        <button
          className=" px-[20px] flex items-center py-[10px] w-full  nav-button"
          style={{ color: packageButtonColor }}
          onClick={togglePackageVisibility}
        >
          <span className="flex gap-3 items-center w-full">
            <span className="min-w-[25px] text-center">
              <PersonOutlineIcon />
            </span>
          </span>
        </button>
      </div>

      <div className=" border-b-[1px] border-dashed border-gray-200">
        <button
          className=" px-[20px] flex items-center py-[10px] w-full  nav-button"
          style={{ color: bookingButtonColor }}
          onClick={toggleBookingVisibility}
        >
          <span className="flex gap-3 items-center w-full">
            <span className="min-w-[25px] text-center text-[19px]">
              <FontAwesomeIcon icon={faTableList} />
            </span>
          </span>
        </button>
      </div>
    </>
  );
};
export default NavlistIcons;
