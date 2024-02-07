"use client";
import React, { useState, useEffect ,useRef} from "react";
import { State } from "country-state-city";

interface SelectStateInputProps {
  label: string;
  country: string;
  state: string;
  name: string;
  isocode:string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;

}

const SelectStateInput: React.FC<SelectStateInputProps> = ({
  label,
  country,
  state,
  name,
  isocode,
  onChange,
  error = false,

}) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [selectedState, setSelectedState] = useState(state || "");
  const [currentStateOptions, setCurrentStateOptions] = useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpenState(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectRef]);



  useEffect(() => {
    if (isocode) {
      const statesOfCountry = State.getStatesOfCountry(isocode);

      const stateNames = statesOfCountry.map((state) => state.name);
      setCurrentStateOptions(stateNames);
      setSelectedState(state);

    }
  }, [country,isocode,state]);

  const handleStateOptionClick = (selectedValue: string) => {
    setIsOpenState(false);
    setSelectedState(selectedValue);
    onChange({
      target: {
        name,
        value: selectedValue,
      },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div>
     
        <div>
          <label className="text-[#232323]">{label}<span className="text-red-500">*</span></label>

          <div
            className={`border-[1px] ${
              isOpenState ? "border-[#cbced3]" : "border-gray-200"
            }   ${error ? 'border-red-500' : 'border-gray-200'} rounded-lg h-[48px] w-full pl-2 mt-2 mb-1 pt-3 text-[#7987a1] bg-white relative `}
            onClick={() => setIsOpenState(!isOpenState)}
            ref={selectRef}
          >
            <div className="flex items-center justify-between">
              <div>{selectedState || "Select State"}</div>
              <div className="ml-2 mr-3">
                <svg
                  className={`fill-current text-black h-3 w-3 transform ${
                    isOpenState ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-8-8-1.5 2 9 9 9-9-1.5-2z" />
                </svg>
              </div>
            </div>
            {isOpenState && (
              <div className="absolute top-full left-0 w-full mt-[2px] bg-white border-[1px] border-[#cbced3] shadow-md z-20 entries-style overflow-scroll max-h-[200px] min-h-[30px] pr-[20%] country-style ">
                {currentStateOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer px-3 ${
                      selectedState === option
                        ? "bg-[#029e9d] text-white"
                        : "bg-white hover:text-white hover:bg-[#029e9d]"
                    }`}
                    onClick={() => handleStateOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {error && (
        <p className="text-red-500 text-sm mt-2">
          Please select a state 
        </p>
      )}
      
    </div>
  );
};

export default SelectStateInput;
