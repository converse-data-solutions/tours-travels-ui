"use client";
import React from "react";
import Image from "next/image";
import BooknowPageimg from "../../public/booknowpageimg.jpg";
import backgroundImg from "../../public/shape8.png";
import SelectLabels from "./SelectDropDown";
import FormInput from "../admin/users/adduser/Forminput";
import { useState } from "react";
import ReusableSelect from "./SelectDropDown";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TextArea from "../admin/users/adduser/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinWink,
  faLocation,
  faMapLocation,
  faMapMarked,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import CreditCard from "../../public/CreditCard.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";

interface UserDataType {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string | Date;
  title: string;
  gender: string;
  mobile_number: string;
  country: string;
  state: string;
  address_1: string;
  address_2: string;
  card_holder_name: string;
  card_number: string;
  expiry_date: string;
  cvv: string;
}

const HomePageContent = () => {
  const [bookNowData, setBookNowData] = useState<UserDataType>({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    title: "",
    gender: "",
    mobile_number: "",
    country: "",
    state: "",
    address_1: "",
    address_2: "",
    card_holder_name: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookNowData({ ...bookNowData, [name]: value });
  };
  const titleOptions = [
    { value: "Mr.", label: "Mr." },
    { value: "Mrs.", label: "Mrs." },
  ];
  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (value.length <= 100) {
      setBookNowData({ ...bookNowData, [name]: value });
    } else {
      alert("Textarea input is too long! Max length is 200 characters.");
    }
  };
  const rating = 5;

  return (
    <div className="">
      <div className="BooknowImagePart h-[400px] relative top-[-50px]"></div>
      <div className=" backgroundPart flex w-full h-[150px] relative z-10 top-[-170px] h bg-transparent">
        <Image
          src={backgroundImg}
          alt="img"
          height={100}
          width={1000}
          className=" h-full w-[33.33%] rotate-180 bg-transparent"
        />
        <Image
          src={backgroundImg}
          alt="img"
          height={100}
          width={1000}
          className=" h-full w-[33.33%] rotate-180 bg-transparent"
        />
        <Image
          src={backgroundImg}
          alt="img"
          height={100}
          width={1000}
          className=" h-full w-[33.33%] rotate-180 bg-transparent"
        />
      </div>
      <div className="absolute top-[30%] ld:top-[25%] flex justify-center w-full">
        <div className="text-center white ">
          <h1 className="text-[24px] md:text-[58px] Play-fair  text-white">
            BOOKING
          </h1>
          <h3 className="flex gap-2 justify-center">
            <span className="text-[#028B8A] text-[16px]">Home</span>
            <span className="text-white">|</span>
            <span className="text-white">Booking</span>
          </h3>
        </div>
      </div>

      <div className="flex bg-white z-10 relative top-[-200px] p-10  pl-[200px]">
        <div className="bg-white w-7/12">
          <div className="text-3xl font-semibold pb-5">
            {" "}
            Traveller Information
          </div>
          <hr className="border-dashed  pb-5"></hr>
          <div className=" pb-5 text-xl font-semibold">
            Let Us Know Who You Are
          </div>
          <div className="flex gap-6 justify-around pr-2">
            <div className="flex flex-col">
              <div className="pb-2">Title</div>
              <ReusableSelect
                id="title"
                value={bookNowData.title}
                onChange={handleChange}
                options={titleOptions}
                displayEmpty
                width="100%"
                height="49px"
                borderRadius="11px"
                borderColor="#dee2e6"
                ariaLabel="Title Select"
                placeholder=" Select"
              />
            </div>

            <div className="w-full pb-2">
              <FormInput
                label="First Name*"
                name="first_name"
                value={bookNowData.first_name}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="w-full">
              {" "}
              <FormInput
                label="Last Name"
                name="last_name"
                value={bookNowData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="flex gap-6 pr-2 pb-2">
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={bookNowData.email}
                onChange={handleChange}
                required
              />
              <div className="w-full">
                <FormInput
                  label="Phone "
                  name="mobile_number"
                  value={bookNowData.mobile_number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex w-full pr-2 pb-2 gap-6">
              <div className="flex flex-col w-full ">
                <div className="pb-2">Title</div>
                <ReusableSelect
                  id="title"
                  value={bookNowData.gender}
                  onChange={handleChange}
                  options={GenderOptions}
                  displayEmpty
                  width="470px"
                  height="49px"
                  borderRadius="11px"
                  borderColor="#dee2e6"
                  ariaLabel="Title Select"
                  placeholder=" Select Gender"
                />
              </div>

              <div className="w-full">
                <label>Date</label>
                <input
                  type="date"
                  className="py-3 border-[1px] border-gray-200 rounded-lg h-[50px] w-full mt-2 mb-2 pr-5"
                  name="start_date"
                  value={
                    bookNowData.date_of_birth instanceof Date
                      ? bookNowData.date_of_birth.toISOString().split("T")[0]
                      : bookNowData.date_of_birth
                  }
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex gap-6 w-full pr-2 pb-4">
              <div className="w-full ">
                <label>Country</label>
                <br />
                <CountryDropdown
                  classes="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 bg-white "
                  value={bookNowData.country}
                  onChange={(val: any) => {
                    setBookNowData({ ...bookNowData, country: val });
                  }}
                />
              </div>

              <div className="w-full">
                <label>State</label>
                <RegionDropdown
                  country={bookNowData.country}
                  value={bookNowData.state}
                  onChange={(val) =>
                    setBookNowData({ ...bookNowData, state: val })
                  }
                  classes="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 bg-white"
                />
              </div>
            </div>

            <div className="flex w-full pr-2 gap-6">
              <TextArea
                label="Address Line 1"
                name="address_1"
                value={bookNowData.address_1}
                onChange={handleTextareaChange}
              />
              <TextArea
                label="Address Line 2"
                name="address_2"
                value={bookNowData.address_2}
                onChange={handleTextareaChange}
              />
            </div>
          </div>
          <div className="pr-2">
            <div className="py-6 bg-[#ededef] w-auto  flex  rounded-lg mt-6 pl-6  ">
              <div className="p-5 bg-[hsl(180,82%,35%)]  rounded-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faGrinWink}
                  className="text-white text-4xl"
                />
              </div>

              <div className="p-5">
                <div className="text-xl font-bold"> Good To Know</div>
                <div className="text-gray-500">
                  Free Cancellation until 14:00 pn 11 Feb 2022
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="text-2xl font-semibold pb-4">
              How Do You Want To Pay?
            </div>
            <hr className="border-dashed"></hr>
            <div className="flex gap-6 pt-4">
              <button className="px-6 py-4 text-white bg-[hsl(180,82%,35%)] rounded-lg">
                {" "}
                Credit/Debit card
              </button>
              <button className="px-6 py-4 rounded-lg border border-gray-300">
                {" "}
                Digital Payment
              </button>
            </div>
          </div>

          <div>
            <div className="mt-6 w-[70%] flex sm:flex-col lg:flex-row ">
              <div className="flex -col w-full">
                <div className="flex gap-3 w-full">
                  <FormInput
                    label="Card Holder Name"
                    name="cardHolderName"
                    value={bookNowData.card_holder_name}
                    onChange={handleChange}
                    placeholder="Enter card holder name"
                    required
                  />
                  <FormInput
                    label="Card Number"
                    name="card_number"
                    value={bookNowData.card_number}
                    onChange={handleChange}
                    placeholder="Enter card number"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-4 pr-2 pb-10 w-full lg:w-[70%]">
                <FormInput
                  label="Expiry Date"
                  name="expiry_date"
                  value={bookNowData.expiry_date}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                  required
                />
                <FormInput
                  label="CVV/CVC"
                  name="cvv"
                  value={bookNowData.cvv}
                  onChange={handleChange}
                  placeholder="Enter CVV/CVC"
                  required
                />
              </div>
              <div className="w-[30%]"></div>
              <Image
                src={CreditCard}
                alt="img"
                height={100}
                width={100}
                className="w-full"
              />
            </div>

            <hr className="border-dashed"></hr>

            <div className="flex items-center pt-5">
              <input
                type="checkbox"
                id="termsAndConditions"
                className="h-4 w-4 text-[#028B8A] border-gray-400 rounded focus:ring-[#028B8A] focus:border-[#028B8A] transition duration-300 ease-in-out"
              />
              <label className="pl-2 text-lg text-gray-500">
                By continuing, you agree to the
              </label>

              <label
                htmlFor="termsAndConditions"
                className="ml-2 hover:text-[#028B8A] cursor-pointer text-lg text-gray-500"
              >
                Terms and Conditions.
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white w-5/12 ml-6">
          {" "}
          <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Booking Details</h2>

            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src={CreditCard}
                  alt="Card Image"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <div className="flex items-center space-x-4 mt-4">
                  {Array.from({ length: rating }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-yellow-500 text-lg"
                    />
                  ))}{" "}
                  (15)
                </div>
                <p className="text-gray-700 hover:text-[#028B8A] text-lg">
                  Adriatic Adventure–Zagreb To Athens
                </p>

                <h3 className="text-lg font-semibold text-[#028B8A] ">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Croatia
                </h3>

                

                
              </div>
             

             
            </div>

            <hr className="border border-dashed my-5"></hr>
            <div className="flex  items-center">
      {/* Button Type 1 */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
        <div></div>
        <div></div>
        <
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
      <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
          </div>
          
        </div>

       
      </div>
    </div>
  );
};

export default HomePageContent;
