"use client";
import { useState, useEffect, useRef } from "react";

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  showAdditionalDropdown?: boolean;
}

const SelectRoleInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  showAdditionalDropdown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Consumer");
  const [currentOptions, setCurrentOptions] = useState(options);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        "contains" in dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (selectedValue: string) => {
    setIsOpen(false);
    setSelectedValue(selectedValue);
    onChange({
      target: { name, value: selectedValue },
    } as React.ChangeEvent<HTMLSelectElement>);
    setCurrentOptions((prevOptions) => prevOptions);
  };

  return (
    <div className="relative w-full mb-2  " >
      <label htmlFor={name}>{label}</label>
      <div
        className="border-[1px] border-gray-200 rounded-lg h-[48px] w-full pl-2 mt-2 mb-1 pt-3 text-gray-500 bg-white relative"
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
      >
        <div className="flex items-center justify-between">
          <div>{selectedValue}</div>
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
          <div className="absolute top-full left-0 w-full mt-[2px] bg-white border-[1px] border-[#6e6d6d] shadow-md  ">
            {options.map((option, index) => (
              <div
                key={option}
                className={`cursor-pointer px-3 ${
                  index === 0 && selectedValue !== option
                    ? "text-gray-400 hover:bg-white  cursor-not-allowed"
                    : "hover:bg-[#029e9d]"
                } ${
                  selectedValue === option
                    ? "bg-[#029e9d] text-white"
                    : "bg-white hover:text-white"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
        {showAdditionalDropdown && selectedValue === "3" && (
          <div className="flex flex-col w-full pt-2">
            <label htmlFor="additionalDropdown" className="">
              Additional Dropdown
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectRoleInput;
