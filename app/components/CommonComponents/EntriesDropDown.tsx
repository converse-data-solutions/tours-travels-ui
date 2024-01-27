"use client";
import React, { useState, useEffect, useRef } from "react";
interface ShowEntriesDropdownProps {
  entries: number;
  setEntries: React.Dispatch<React.SetStateAction<number>>;
}

const ShowEntriesDropdown: React.FC<ShowEntriesDropdownProps> = ({
  entries,
  setEntries,
}) => {
  const options = ["Show Entries", "10", "20", "30"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [currentOptions, setCurrentOptions] = useState(options);

  const dropdownRef3 = useRef<HTMLDivElement>(null);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    setSelectedValue(selectedValue);
    setEntries(parseInt(selectedValue));
    setCurrentOptions((prevOptions) =>
      prevOptions.filter((option) => option !== selectedValue),
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef3]);

  return (
    <div className="relative w-full mb-2">
      <div
        className="border-[1px] border-gray-200 focus:outline-none focus:border-gray-300 h-[48px] w-full px-4 py-3 mb-2 rounded-lg outline-none md:w-[100%] lg:w-full bg-white text-base text-[#7987a1] relative"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          paddingRight: "2rem",
        }}
        ref={dropdownRef3}
      >
        <div className="flex items-center justify-between">
          <div>{selectedValue}</div>
          <div className="ml-2 mr-[-15px]">
            <svg
              className={`fill-current text-[#232323] h-3 w-3 transform ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-8-8-1.5 2 9 9 9-9-1.5-2z" />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-[2px] bg-white border-[1px] border-[#6e6d6d] shadow-md ">
            {options.map((option, index) => (
              <div
                key={option}
                className={`cursor-pointer px-3 ${
                  index === 0
                    ? "cursor-not-allowed hover:text-gray-500 !important"
                    : selectedValue === option
                      ? "bg-[#029e9d] text-white"
                      : "bg-white hover:text-white hover:bg-[#029e9d]"
                }
                `}
                onClick={() => index !== 0 && handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowEntriesDropdown;
