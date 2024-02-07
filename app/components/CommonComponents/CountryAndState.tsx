import React, { useState, useEffect, useRef } from "react";
import { Country, ICountry, IState, State } from "country-state-city";
import { Iso } from "@mui/icons-material";

interface SelectInputProps {
  label: string;
  name: string;
  value:string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
}

interface CountryInterFace {
  id: number;
  name: string;
  isoCode: string;
}

interface StateInterFace {
  option: string;
}

const SelectCountryInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  error = false,
}) => {
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpenState, setIsOpenState] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(value||"");
  const [selectedState, setSelectedState] = useState("");
  const [isoCode, setIsoCode] = useState("");
  const [countries, setCountries] = useState<CountryInterFace[]>([]);
  const [states, setStates] = useState("");
  const [currentCountryOptions, setCurrentCountryOptions] = useState<any[]>([]);
  const [currentStateOptions, setCurrentStateOptions] = useState<string[]>([]);
  const [selectionMode, setSelectionMode] = useState(false);

  const dropdownRefCountry = useRef<HTMLDivElement>(null);
  const dropdownRefState = useRef<HTMLDivElement>(null);

  const countryList: any = Country.getAllCountries();
  const stateList: any = State.getAllStates();

  const handleCountryOptionClick = (selectedValue: ICountry) => {
    setIsOpenCountry(false);
    console.log(selectedValue);

    const selectedCountryInfo: any = Country.getCountryByCode(
      selectedValue.isoCode
    );

    setSelectedCountry(selectedCountryInfo.name);
    setIsoCode(selectedCountryInfo.isoCode);

    setSelectedState("");

    const statesOfCountry: any = State.getStatesOfCountry(
      selectedValue.isoCode
    );
    const stateNames: string[] = statesOfCountry.map(
      (state: any) => state.name
    );
    setCurrentStateOptions(stateNames);

    setCurrentStateOptions(statesOfCountry.map((state: any) => state.name));
    onChange({
      target: {
        name,
        country: selectedCountryInfo.name,
        countryInfo: selectedCountryInfo,
      },
    } as unknown as React.ChangeEvent<HTMLSelectElement>);

    setCurrentCountryOptions((prevOptions) =>
      prevOptions.filter((option) => option !== selectedValue.isoCode)
    );
    setSelectionMode(true);
  };

 

  useEffect(() => {
    const countryList: any = Country.getAllCountries();

    setCountries(countryList);
    setCurrentCountryOptions(countryList.map((country: any) => country.name));

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefCountry.current &&
        !dropdownRefCountry.current.contains(event.target as Node)
      ) {
        setIsOpenCountry(false);
      }
      if (
        dropdownRefState.current &&
        !dropdownRefState.current.contains(event.target as Node)
      ) {
        setIsOpenState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefCountry, dropdownRefState]);

  

  useEffect(() => {
    if (isoCode) {
      const statesOfCountry: any = State.getStatesOfCountry(isoCode);
      const stateNames: string[] = statesOfCountry.map(
        (state: any) => state.name
      );
      setCurrentStateOptions(stateNames);
    }
  }, [isoCode]);

  return (
    <div className={`relative w-full mb-2 `}>
      <label htmlFor={name} className="text-[#232323]">
        {label}         <span className="text-red-500">*</span>

      </label>
      <div
        className={`border-[1px] ${
          isOpenCountry ? "border-[#cbced3]" : "border-gray-200"
        }   ${error ? 'border-red-500' : 'border-gray-200'} rounded-lg h-[48px] w-full pl-2 mt-2 mb-1 pt-3 text-[#7987a1]  bg-white relative `}
        onClick={() => setIsOpenCountry(!isOpenCountry)}
        ref={dropdownRefCountry}
      >
        <div className="flex items-center justify-between">
          <div>{value|| "select a country"}</div>
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
            {countryList.map((option: ICountry, index: number) => (
              <div
                key={option.isoCode}
                className={`cursor-pointer px-3 ${
                  value === option.name
                    ? "bg-[#029e9d] text-white"
                    : "bg-white hover:text-white hover:bg-[#029e9d]"
                }`}
                onClick={() => index !== 0 && handleCountryOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          Please select a country 
        </p>
      )}
      
    </div>
  );
};

export default SelectCountryInput;
