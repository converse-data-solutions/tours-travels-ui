"use client";
import React, { useState, useEffect, useRef } from "react";
interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomDropdown: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const getDisplayLabel = (value: string): string => {
    if (value === "1") {
      return "Admin";
    } else if (value === "2") {
      return "Consumer";
    } else if (value === "3") {
      return "Agent";
    } else {
      return "";
    }
  };

  const handleOptionClick = (selectedOption: {
    label: string;
    value: string;
  }) => {
    setIsOpen(false);
    setSelectedValue(selectedOption.value);
    onChange({
      target: { name, value: selectedOption.value },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative w-full mb-2  `}>
      <label htmlFor={name} className="text-[#232323]">
        {label}
      </label>
      <div
        className={`border-[1px] ${
          isOpen ? "border-[#cbced3]" : "border-gray-200"
        }  rounded-lg h-[48px] w-full pl-2 mt-2 mb-1 pt-3 text-gray-500 bg-white relative`}
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
      >
        <div className="flex items-center justify-between">
          <div>{getDisplayLabel(selectedValue)}</div>
          <div className="ml-2 mr-3">
            <svg
              className={`fill-current text-black h-3 w-3 transform ${
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
          <div className="absolute top-full left-0 w-full mt-[2px] bg-white border-[1px] border-[#cbced3] shadow-md entries-style ">
            {options.map((option) => (
              <div
                key={option.value}
                className={`cursor-pointer px-3 ${
                  selectedValue === option.value
                    ? "bg-[#029e9d] text-white"
                    : "hover:bg-[#029e9d] text-gray-800 hover:text-white"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
