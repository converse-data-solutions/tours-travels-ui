"use client";
import React, { useState, useEffect, useRef } from "react";
interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabledValue?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  disabledValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [currentOptions, setCurrentOptions] = useState(options);
  const [selectionMode, setSelectionMode] = useState(false); 

  const dropdownRef2 = useRef<HTMLDivElement>(null);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    setSelectedValue(selectedValue);
    onChange({
      target: { name, value: selectedValue },
    } as React.ChangeEvent<HTMLSelectElement>);
    setCurrentOptions((prevOptions) =>
      prevOptions.filter((option) => option !== selectedValue),
    );
    setSelectionMode(true);
  };

  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef2]);
  

  return (
    <div className="relative w-full mb-2">
      <label htmlFor={name}>{label}</label>
      <div
        className={`border-[1px]  ${isOpen?"border-[#babcbe]":"border-gray-200"} border-gray-200 rounded-lg h-[48px] w-full pl-2 mt-2 mb-1 pt-3 text-[#7987a1] bg-white relative `}
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef2}
      >
        <div className="flex items-center justify-between">
          <div>{value}</div>
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
          <div className="absolute top-full left-0 w-full mt-[2px] bg-white border-[1px] border-[#6e6d6d] shadow-md  entries-style">
            {options.map((option, index) => (
              <div
                key={option}
                className={`cursor-pointer px-3 ${
                  index === 0  && selectionMode
                    ? "cursor-not-allowed "
                    : value === option
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

export default SelectInput;
