"use client";
import React, { useState, useEffect, useRef } from "react";
import { Country, ICountry, State } from "country-state-city";

interface CountryDropdownProps {
  label: string;
  selectedCountry: string;
  onCountryChange: (selectedCountry: ICountry) => void;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({
  label,
  selectedCountry,
  onCountryChange,
}) => {
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [currentCountryOptions, setCurrentCountryOptions] = useState<string[]>(
    [],
  );

  const dropdownRefCountry = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const countryList: ICountry[] = Country.getAllCountries();
    setCountries(countryList);
    setCurrentCountryOptions(countryList.map((country) => country.name));

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefCountry.current &&
        !dropdownRefCountry.current.contains(event.target as Node)
      ) {
        setIsOpenCountry(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefCountry]);

  const handleCountryOptionClick = (selectedValue: ICountry) => {
    setIsOpenCountry(false);

    onCountryChange(selectedValue);
  };

  return (
    <div className="relative w-full mb-2">
      <label htmlFor="country" className="text-[#232323]">
        {label}
      </label>

      <div
        className={`border-[1px] ${
          isOpenCountry ? "border-[#cbced3]" : "border-gray-200"
        } rounded-lg h-[48px] w-full pl-2 mt-2 mb-1 pt-3 text-[#7987a1]  bg-white relative `}
        onClick={() => setIsOpenCountry(!isOpenCountry)}
        ref={dropdownRefCountry}
      >
        <div className="flex items-center justify-between">
          <div>{selectedCountry || "Select a country"}</div>
          <div className="ml-2 mr-3">
            <svg
              className={`fill-current text-black h-3 w-3 transform ${
                isOpenCountry ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-8-8-1.5 2 9 9 9-9-1.5-2z" />
            </svg>
          </div>
        </div>
        {isOpenCountry && (
          <div className="absolute top-full left-0 w-full mt-[2px] bg-white border-[1px] border-[#cbced3] shadow-md z-10 entries-style overflow-scroll h-[200px]  country-style ">
            {countries.map((option) => (
              <div
                key={option.isoCode}
                className={`cursor-pointer px-3 ${
                  selectedCountry === option.name
                    ? "bg-[#029e9d] text-white"
                    : "bg-white hover:text-white hover:bg-[#029e9d]"
                }`}
                onClick={() => handleCountryOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDropdown;
