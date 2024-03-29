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
  const [initialRender, setInitialRender] = useState(true);
  const [selectionMode, setSelectionMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dropdownRef3 = useRef<HTMLDivElement>(null);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    setSelectedValue(selectedValue);
    setEntries(parseInt(selectedValue));
    setCurrentOptions((prevOptions) =>
      prevOptions.filter((option) => option !== selectedValue),
    );
    setSelectionMode(true);
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
  useEffect(() => {
    setInitialRender(false);
  }, []);

  return (
    <div className={`relative w-full mb-2 `}>
      <div
        className={`border-[1px] ${
          isOpen ? "border-[#babcbe]" : "border-gray-200"
        }  focus:outline-none focus:border-[#cbced3] h-[48px] w-full px-4 py-3 mb-2 rounded-lg outline-none md:w-[100%] lg:w-full bg-white text-base text-[#7987a1] relative`}
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
          <div
            className="absolute top-full left-0 w-full mt-[1px] bg-white border-[1px] border-[#cbced3]!important shadow-md z-10 rounded-none entries-style  "
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
          >
            {options.map((option, index) => (
              <div
                key={option}
                className={`cursor-pointer px-3  ${
                  index === 0 && selectionMode
                    ? "cursor-not-allowed entries-first "
                    : selectedValue === option
                      ? "bg-[#029e9d] text-white"
                      : "bg-white hover:text-white entries-first-index1"
                }`}
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
