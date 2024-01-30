"use client";
import React from "react";
import Image from "next/image";
import backgroundImg from "../../public/shape8.png";
import FormInput from "../components/CommonComponents/FormInput";
import { useState, useEffect } from "react";
import ReusableSelect from "./SelectDropDown";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TextArea from "../admin/users/adduser/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinWink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import CreditCard from "../../public/CreditCard.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import image from "../../public/beautiful-green-field-scenery-free-photo.webp";
import { TableBody, TableCell, TableRow } from "@mui/material";

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
  package_id: string;
  user_id: number;
}
interface HomePageContentProps {
  id: boolean;
}
const HomePageContent: React.FC<HomePageContentProps> = ({ id }) => {
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
    package_id: "",
    user_id: 0,
  });
  useEffect(() => {
    const id = bookNowData.package_id;
    console.log(id);
  }, [bookNowData.package_id]);

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
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (value.length <= 100) {
      setBookNowData({ ...bookNowData, [name]: value });
    } else {
      alert("Textarea input is too long! Max length is 200 characters.");
    }
  };
  const rating = 5;
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGender = event.target.value;
    setBookNowData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTitle = event.target.value;
    setBookNowData((prevData) => ({
      ...prevData,
      title: selectedTitle,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/booking/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookNowData),
        },
      );

      if (response.status === 200) {
        console.log("booking successfully");
      } else {
        console.log("booking got error");
      }
    } catch (error) {
      console.error("error occured on booking", error);
    }
  };

  return (
    <div className=" ">
      <div className="BooknowImagePart h-[400px] relative top-[-50px]"></div>
      <div className=" backgroundPart flex w-full h-[150px] relative z-10 top-[-170px] h bg-transparent">
        <Image
          src={backgroundImg}
          alt="img"
          height={1000}
          width={1000}
          className="   lg:h-full lg:w-[33.33%] rotate-180 bg-transparent"
        />
        <Image
          src={backgroundImg}
          alt="img"
          height={100}
          width={1000}
          className="hidden h-full w-[33.33%] rotate-180 bg-transparent lg:inline-block"
        />
        <Image
          src={backgroundImg}
          alt="img"
          height={100}
          width={1000}
          className="hidden h-full w-[33.33%] rotate-180 bg-transparent lg:inline-block"
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

      <div className="flex bg-white z-10 relative top-[-200px] pl-5 pr-3 lg:pl-[300px]    flex-col lg:flex-row">
        <div className="bg-white w-full lg:w-8/12 pt-20">
          <div className="text-3xl font-semibold pb-5">
            {" "}
            Traveller Information
          </div>
          <hr className="border-dashed  pb-5"></hr>
          <div className=" pb-5 text-xl font-semibold">
            Let Us Know Who You Are
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex gap-6 justify-around pr-2 flex-col  lg:flex-row">
              <div className="flex flex-col">
                <div className="pb-2">Title</div>
                <ReusableSelect
                  id="title"
                  value={bookNowData.title}
                  onChange={handleTitleChange}
                  options={titleOptions}
                  displayEmpty
                  width="full"
                  height="49px"
                  borderRadius="11px"
                  borderColor="#dee2e6"
                  ariaLabel=""
                  placeholder="Select"
                />
              </div>

              <div className="w-full lg:pb-2">
                <FormInput
                  label="First Name*"
                  name="first_name"
                  value={bookNowData.first_name}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="w-full pb-2">
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
              <div className="flex gap-6 pr-2 pb-2 flex-col lg:flex-row">
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

              <div className="flex w-full pr-2 pb-2 gap-6 flex-col lg:flex-row">
                <div className="flex flex-col w-full ">
                  <div className="pb-2">Gender</div>
                  <ReusableSelect
                    id="Gender"
                    value={bookNowData.gender}
                    onChange={handleGenderChange}
                    options={GenderOptions}
                    displayEmpty
                    width=""
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
                    className="py-3 border-[1px] border-gray-200 rounded-lg h-[50px] w-full mt-2 mb-2 pr-5 focus:outline-none focus:outline-gray-400"
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

              <div className="flex gap-6 w-full pr-2 pb-4 flex-col lg:flex-row">
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
                    onChange={(val: any) =>
                      setBookNowData({ ...bookNowData, state: val })
                    }
                    classes="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 bg-white"
                  />
                </div>
              </div>

              <div className="flex w-full pr-2 gap-6 flex-col lg:flex-row">
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
              <div
                className="py-6 bg-[#ededef] w-auto  flex  rounded-lg mt-6  pl-6
             "
              >
                <div className="py-4 px-6 lg:p-5 bg-[hsl(180,82%,35%)]  rounded-lg">
                  {" "}
                  <FontAwesomeIcon
                    icon={faGrinWink}
                    className="text-white text-4xl"
                  />
                </div>

                <div className="pl-5">
                  <div className="text-lg font-bold pb-2 pt-1">
                    {" "}
                    Good To Know:
                  </div>
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
              <div className="flex gap-2 pt-4">
                <button className="px-6 py-4 text-white text-lg  bg-[hsl(180,82%,35%)] rounded-lg w-full">
                  {" "}
                  Credit/Debit card
                </button>
                <button className="px-6 py-4 rounded-lg border border-gray-300 w-full text-lg">
                  {" "}
                  Digital Payment
                </button>
              </div>
            </div>

            <div>
              <div className="mt-6  w-full  flex flex-col lg:flex-row pb-5 lg:gap-3">
                <div className="flex flex-col  w-full">
                  <div className="flex  flex-col  w-full">
                    <FormInput
                      label="Card Holder Name"
                      name="cardHolderName"
                      value={bookNowData.card_holder_name}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label="Card Number"
                      name="card_number"
                      value={bookNowData.card_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col   mt-4 lg:mt-0 pr-2 pb-10 w-full  ">
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
                <div className=""></div>
                <Image
                  src={CreditCard}
                  alt="img"
                  height={100}
                  width={1000}
                  className="w-full  lg:w-[28vh] lg:h-[17vh] xl:h-[20vh] "
                />
              </div>

              <hr className="border-dashed "></hr>
              <div className=" flex flex-col lg:flex-row lg:justify-between">
                <div className="flex items-center pt-5  ">
                  <input
                    type="checkbox"
                    id="termsAndConditions"
                    className="h-4 w-4 text-[#028B8A] border-gray-400 rounded focus:ring-[#028B8A] focus:border-[#028B8A] transition duration-300 ease-in-out"
                  />
                  <span>
                    <label className="pl-2  text-[17px] lg:text-lg text-gray-500">
                      By continuing, you agree to the
                    </label>

                    <label
                      htmlFor="termsAndConditions"
                      className="ml-2 hover:text-[#028B8A] cursor-pointer text-[17px] lg:text-lg text-gray-500"
                    >
                      Terms and Conditions.
                    </label>
                  </span>
                </div>
                <div className="py-5">
                  <button
                    className="bg-[#028B8A] text-white px-5 py-[15px] rounded-lg booking"
                    onClick={handleSubmit}
                  >
                    CONFIRM BOOKING
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white lg:w-4/12 lg:ml-6  lg:mr-[310px]">
          {" "}
          <div className=" lg:mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3">Your Booking Details</h2>

            <div className="flex items-center flex-col lg:flex-row lg:w-4/12 ">
              <div className=" w-full flex-shrink-0 lg:mr-4">
                <Image
                  src={image}
                  alt="Card Image"
                  width={1000}
                  height={100}
                  className="h-[60vh] w-full  lg:h-[110px] lg:w-[110px] rounded-lg "
                />
              </div>

              <div className=" flex flex-col">
                <div className="flex space-x-1 mt-3">
                  {Array.from({ length: rating }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-yellow-500 text-[16px]"
                    />
                  ))}{" "}
                  200 Reviews
                </div>
                <div className="text-gray-700 hover:text-[#028B8A] text-[16px]">
                  Adriatic Adventure–Zagreb To Athens
                </div>

                <div className="text-lg font-semibold text-[#028B8A] ">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Croatia
                </div>
              </div>
            </div>

            <hr className="border border-dashed my-4"></hr>
            <div className="flex   flex-col lg:flex-row lg:gap-6">
              {/* Button Type 1 */}
              <div className="bg-[#ededef] text-gray-400 px-4  py-2 rounded-md mb-2 w-full pb-3">
                <div className=" text-gray-500 text-[16px]">Check In</div>
                <div className="text-black font-bold text-[16px]">
                  Thu 21 Feb 2022
                </div>
                <div className="text-gray-500 text-[16px]">15:00 - 22:00</div>
              </div>
              <div className="bg-[#ededef] text-gray-400 px-4 py-2  rounded-md w-full pb-3 mb-2">
                <div className="text-gray-500 text-[16px]">Check Out</div>
                <div className="text-black font-bold text-[16px]">
                  Tue 24 Feb 2022
                </div>
                <div className="text-gray-500 text-[16px]">1:00 - 10:00</div>
              </div>
            </div>

            <hr className="border border-dashed mt-4"></hr>
            <div>
              <div className="text-gray-500 text-[16px]">
                Total Length of Stay:
              </div>
              <div className="text-black font-bold text-[16px]">
                8 Days | 7 Nights
              </div>
              <div className="text-[#028B8A] text-[16px] underline">
                travelling on different dates?
              </div>
            </div>
            <hr className="border border-dashed my-4"></hr>
            <div>
              <div className="text-gray-500 text-[16px]">You Selected:</div>
              <div className="flex flex-row justify-between">
                <div className="text-black font-bold text-[16px]">
                  Superior Double Rooms
                </div>
                <div className="text-[16px] text-black font-serif">
                  {" "}
                  1 Room,3 Adults
                </div>
              </div>

              <div className="text-[#028B8A] text-[16px] underline">
                Change your selection
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-md mt-5 ">
            <div className="text-black font-bold text-[22px] py-5 px-3 ">
              {" "}
              Your Price Summary
            </div>
            <div className="px-3">
              <table className="w-full border ">
                <TableRow>
                  <TableCell style={{ border: "solid 1px #d3d3d3" }}>
                    {" "}
                    Superior Twin{" "}
                  </TableCell>{" "}
                  <TableCell>$500.00</TableCell>
                </TableRow>
                <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell style={{ border: "solid 1px #d3d3d3" }}>
                    {" "}
                    Number of Travellers{" "}
                  </TableCell>{" "}
                  <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "solid 1px #d3d3d3" }}>
                    Tax & fee{" "}
                  </TableCell>{" "}
                  <TableCell>$50.00</TableCell>
                </TableRow>
                <TableRow style={{ backgroundColor: "white" }}>
                  <TableCell style={{ border: "solid 1px #d3d3d3" }}>
                    {" "}
                    Booking Fee{" "}
                  </TableCell>{" "}
                  <TableCell>Free</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ border: "solid 1px #d3d3d3" }}>
                    {" "}
                    Total{" "}
                  </TableCell>{" "}
                  <TableCell>$550.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    className="font-bold text-white bg-[#363333]"
                    style={{ borderRight: "solid 1px white" }}
                  >
                    Amount{" "}
                  </TableCell>{" "}
                  <TableCell className="font-bold text-white  bg-[#363333]">
                    $550.00
                  </TableCell>
                </TableRow>
              </table>
            </div>

            <TableBody>
              <TableRow></TableRow>
              <TableCell></TableCell>
            </TableBody>
          </div>
          <div className="rounded-lg p-5 shadow-md my-5">
            <div className="text-black text-[20px]  font-bold">
              Your Payment Schedule
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-gray-500">Before you stay you will pay</div>
              <div className="text-gray-500">$40.00</div>
            </div>
          </div>
          <div className="rounded-lg p-5 shadow-md mb-10">
            <div className="text-black text-[20px]  font-bold">
              Do You Have A Promo Code?
            </div>
            <FormInput
              label=""
              name="cardHolderName"
              value={bookNowData.card_holder_name}
              onChange={handleChange}
            />
            <button className="px-5 py-4 bg-[#028B8A] text-white rounded-lg mt-2  hover-button">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
