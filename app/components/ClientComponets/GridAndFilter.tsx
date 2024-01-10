"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BsGrid3X3GapFill } from "react-icons/bs";
import SearchSelectDropDown from "../CommonComponents/SearchSelectDropdown";

interface Filter {
  filter: any;
}

interface GridAndFilterProps {
  onButtonClick: (buttonType: string) => void;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const GridAndFilter: React.FC<GridAndFilterProps> = ({ onButtonClick }) => {
  const [data, setData] = useState<Filter>({
    filter: "",
  });
  const [isBarsButtonClicked, setIsBarsButtonClicked] = useState(true);
  const [isGridButtonClicked, setIsGridButtonClicked] = useState(false);

  const handleChange = (value: any) => {
    setData((prevData) => ({
      ...prevData,
      filter: value,
    }));
  };

  const handleBarsButtonClick = () => {
    setIsBarsButtonClicked(true);
    setIsGridButtonClicked(false);
    onButtonClick("bars");
  };

  const handleGridButtonClick = () => {
    setIsBarsButtonClicked(false);
    setIsGridButtonClicked(true);
    onButtonClick("grid");
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row  justify-between w-full">
        <div
          className="text-[16px] text-[#777777] text-center md:text-start pb-4 lg:pb-0"
          style={poppins.style}
        >
          Showing 1-5 of 80 results
        </div>
        <div className="flex ">
          <div className="flex px-[10%] lg:px-0 gap-4 justify-around md:justify-end items-center">
            <div>
              <button
                onClick={handleBarsButtonClick}
                className={`${
                  isBarsButtonClicked
                    ? "text-white bg-[#fdc703] px-3 py-2 rounded-lg"
                    : "text-[#777777] hover:text-[#029e9d] px-2 py-1 rounded transition-all duration-300"
                } text-[16px]`}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <div>
              <button
                onClick={handleGridButtonClick}
                className={`${
                  isGridButtonClicked
                    ? "text-white bg-[#fdc703] p-3 rounded-lg text-[16px]"
                    : "text-[#777777] hover:text-[#029e9d]  px-2 py-1 rounded transition-all duration-300 "
                } text-[16px]`}
              >
                <BsGrid3X3GapFill />
              </button>
            </div>

            <div className="w-[100%] md:w-[1]">
              <SearchSelectDropDown
                value={data.filter}
                onChange={handleChange}
                options={[
                  { value: "Kerala", label: "Kerala" },
                  { value: "Average rating", label: "Average rating" },
                  { value: "Price:low to high", label: "Price:low to high" },
                  { value: "Price:high to low", label: "Price:high to low" },
                ]}
                displayEmpty
                placeholder="Sort By "
                required
                width="100%"
                className="text-[15px] hover:text-white  "
                style={poppins.style}
              />
            </div>

            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridAndFilter;
