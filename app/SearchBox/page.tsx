"use client";
import React, { useState } from "react";
import ReusableSelect from "../homepage/SelectDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOn";
import SearchDropDown from "../components/SearchDropDown";
import { useSession } from "next-auth/react";

interface PackageSearch {
  date: string;
  destination: string;
  travelType: string;
  tourduration: string;
}

const SearchBox: React.FC = () => {
  const { data: session } = useSession();

  const isSessionPresent = !!session;

  if (!isSessionPresent) {
    return null;
  }
  const [destination, setDestination] = useState<string>("");
  const [travelType, setTravelType] = useState<string>("");
  const [tourDuration, setTourDuration] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [data, setData] = useState<PackageSearch>({
    date: "",
    destination: "",
    travelType: "",
    tourduration: "",
  });

  const handleDestinationChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setDestination(event.target.value as string);
  };

  const handleTravelTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setTravelType(event.target.value as string);
  };

  const handleTourDurationChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setTourDuration(event.target.value as string);
  };

  const handleDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDate(event.target.value as string);
  };

  const handleSubmit = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/packagedetails/getbyuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Search data sent successfully", data);

        setData(data);
      })
      .catch((error) => {
        console.error("Error sending search data", error);
      });
  };

  return (
    <div className=" flex flex-col lg:flex-row w-full xl:h-[16vh] ">
      <div className="w-full lg:w-1/5 bg-[hsl(180,82%,35%)] rounded-t-lg lg:rounded-l-lg  lg:rounded-r-none flex px-4">
        <div className="flex w-full  items-center justify-center py-7 lg:py-0">
          <div className="text-white lg:w-4/12 flex justify-center ">
            <LocationOnOutlinedIcon className="text-[45px]" />
          </div>
          <div>
            <h1 className="text-white text-[22px] font-bold pl-2 flex justify-start font-serif">
              Find Your Holidays
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col lg:w-full lg:flex-row  bg-white p-4 border border-solid-[1px] rounded-b-md lg:rounded-r-md  lg:rounded-l-none">
        <form className="bg-white lg:flex  items-center  xl:justify-between  lg:h-auto py-6  lg:rounded-r-lg xl:px-1 w-full">
          <div className="flex gap-3 justify-around w-full flex-col lg:flex-row">
            <SearchDropDown
              id="destination"
              value={destination}
              onChange={handleDestinationChange}
              options={[
                { value: "Kerala", label: "Kerala" },
                { value: "Karnataka", label: "Karnataka" },
                { value: "Delhi", label: "Delhi" },
                { value: "Cochin", label: "cochin" },
              ]}
              displayEmpty
              placeholder="Destination &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              required
              width="100%"
              className=""
            />
            <input
              id="date"
              value={date}
              onChange={handleDateChange}
              placeholder="dd/mm/yyyy"
              type="date"
              required
              className="border-[1px] border-gray-300 rounded-lg h-[50px] w-full pl-4"
            />
            <SearchDropDown
              id="travelType"
              value={travelType}
              onChange={handleTravelTypeChange}
              options={[
                { value: "City tour", label: "City tour" },
                { value: "Family tour", label: "Family tour" },
              ]}
              displayEmpty
              placeholder="Travel type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              required
              width="100%"
              className="border-[1px] border-gray-100 rounded-lg h-[50px] w-full "
            />

            <SearchDropDown
              id="tourDuration"
              value={tourDuration}
              onChange={handleTourDurationChange}
              options={[
                { value: "5 days", label: "5 days" },
                { value: "7 days", label: "7 days" },
              ]}
              displayEmpty
              placeholder=" Tour duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              required
              width="100%"
            />

            <button
              type="submit"
              className="bg-[hsl(180,82%,35%)] lg:min-w-fit px-10 text-white rounded-lg h-[50px] booking"
            >
              <span className="pr-2">
                <FontAwesomeIcon icon={faSearch} className="text-white" />
              </span>
              Search Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
