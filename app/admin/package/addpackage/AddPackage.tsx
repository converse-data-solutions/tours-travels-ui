"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import FormInput from "@/app/components/CommonComponents/FormInput";
import "draft-js/dist/Draft.css";
import DraftEditing from "./DraftEditing";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Image from "next/image";
import AlternateImg from "../../../../public/alternative.png";
import SelectInput from "@/app/components/CommonComponents/SelectedInput";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { LuCalendar, LuPlus } from "react-icons/lu";
import FormNumberInput from "@/app/components/CommonComponents/FormNumberInput";
import styled from "styled-components";

interface PackageDataType {
  title: string;
  start_date: any;
  file_name: File | any;
  destination: string;
  country: string;
  state: string;
  price: string;
  no_of_person: string;
  days_and_night: string;
  description: string;
  offer: string;
  category: string;
}
interface AddUserProps {
  isEditMode: boolean;
  initialPackageData?: PackageDataType;
}

const CustomCountryDropdown = styled(CountryDropdown)`
  padding: 10px;
  background-color: #029e9d;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;
const AddPackage = ({ isEditMode, initialPackageData }: AddUserProps) => {
  const { id } = useParams<{ id: string }>();
  const [successMessage, setSuccessMessage] = useState("");

  let [packageData, setPackageData] = useState<PackageDataType>(
    initialPackageData || {
      title: "",
      start_date: "",
      file_name: "",
      destination: "",
      country: "",
      state: "",
      price: "",
      no_of_person: "",
      days_and_night: "",
      description: "",
      offer: "",
      category: "",
    },
  );

  interface ErrorType {
    title: string;
    start_date: string;
    country: string;
    state: string;
  }

  let [file, setFile] = useState<File | string>();

  const [errors, setErrors] = useState<ErrorType>({
    title: "",
    start_date: "",
    country: "",
    state: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors: ErrorType = {
      title: "",
      start_date: "",
      country: "",
      state: "",
    };
    if (packageData.title.trim() === "") {
      newErrors.title = "Title is required";
      isValid = false;
    } else if (/\d/.test(packageData.title)) {
      newErrors.title = "Title should not contain numbers";
      isValid = false;
    } else if (packageData.title.trim().length < 10) {
      newErrors.title = "Title should be at least 10 characters long";
      isValid = false;
    }

    if (!packageData.start_date) {
      newErrors.start_date = "Date is required";
      isValid = false;
    }
    if (packageData.country.trim() === "") {
      newErrors.country = "Please select a country";
      isValid = false;
    }
    if (packageData.state.trim() === "") {
      newErrors.state = "Please select a state";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const datetimeRef = useRef<Datetime | null>(null);

  useEffect(() => {
    if (isEditMode && id) {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return;
      }
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(`Error fetching user data: ${response.status}`);
          }
        })
        .then((getApiData) => {
          setPackageData({
            ...getApiData.data,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [isEditMode, id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      console.error("Form validation failed");
      return;
    }

    if (isEditMode && id) {
      try {
        const { file_name, ...userDataWithoutFilename } = packageData;
        const token = localStorage.getItem("accessToken");
        if (!token) {
          return;
        }
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userDataWithoutFilename),
          },
        );

        if (response.status === 200) {
          const newPackage = await response.json();

          console.log("User updated successfully");

          if (file) {
            const formData = new FormData();
            formData.append("file", file);

            const uploadImageResponse = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/upload/${id}`,
              {
                method: "POST",
                body: formData,
              },
            );

            if (uploadImageResponse.status === 201) {
              setSuccessMessage("Package updated successfully!");

              setTimeout(() => {
                setSuccessMessage("");
              }, 5000);
            } else {
              window.location.reload();
            }
          }
          setSuccessMessage("Package updated successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
          window.location.reload();
        } else {
          console.error("Error updating user:", response.status);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    } else {
      try {
        const { file_name, ...userDataWithoutFilename } = packageData;
        console.log(userDataWithoutFilename);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDataWithoutFilename),
          },
        );

        if (response.status === 200) {
          console.log("Package added successfully");
          const newPackage = await response.json();
          console.log(newPackage);
          const formData = new FormData();
          if (file instanceof File) {
            formData.append("file", file);
          }

          const uploadImageResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/upload/${newPackage.data.id}`,
            {
              method: "POST",

              body: formData,
            },
          );

          if (uploadImageResponse.status === 201) {
            setSuccessMessage("Package added successfully!");
            console.log("Image uploaded successfully");
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000);
            window.location.reload();
          } else {
            console.error("Error uploading image:", uploadImageResponse.status);
            setSuccessMessage("Package added successfully!");
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000);
            window.location.reload();
          }
        } else {
          console.error("Error adding user:", response.status);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  const handleEditorChange = (value: any) => {
    setPackageData({
      ...packageData,
      description: value,
    });
  };
  function handleInput(event: any) {
    if (localStorage.getItem("accessToken") === null) {
      const userConfirmed = window.confirm(
        "You are not signed in to your account. Do you want to sign in your account?",
      );

      if (userConfirmed) {
        window.location.replace("/signin");
      } else {
        return;
      }
    } else {
      window.location.replace("/admin/package");
    }
  }

  function handleImageChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPackageData({ ...packageData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPackageData({ ...packageData, [name]: value });
  };
  const handleSelectCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (value.length <= 100) {
      setPackageData({ ...packageData, [name]: value });
    } else {
      alert("Textarea input is too long! Max length is 100 characters.");
    }
  };

  return (
    <div className="bg-[#f9fafb] px-3 md:px-6">
      <div className="md:flex justify-between mt-7 md:mt-3 lg:mt-3 ">
        <div className="flex-row text-center">
          <h2 className="text-gray-500 md:pt-5 lg:pt-5">
            <span className="text-[#029e9d] hover:text-[#6f42c1] text-[14px]">
              Dashboard
            </span>{" "}
            <span className="px-1">/</span>
            {isEditMode ? "Update Package" : " Add Packages"}
          </h2>
        </div>
        <div className="flex-row mt-3 text-center lg:mr-1">
          <button
            className="bg-[hsl(180,82%,35%)] text-white py-[10px] px-[12px] w-[141px] rounded-lg  hover:bg-yellow-400 gap-1"
            onClick={handleInput}
          >
            <span className=" text-[20px] pr-1  ">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} className="text-[20px] " />
            </span>{" "}
            <span className="text-[15px]">Back To List</span>
          </button>
        </div>
      </div>

      <form
        className=" pt-6 formshadow pl-[20px] bg-[#ffffff] border-[1px] border-gray-100 shadow-lg rounded-lg pb-[18px] mb-12 mt-4 pr-6 text-[#232323]"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {isEditMode ? (
          packageData.file_name !== null &&
          packageData.file_name !== undefined ? (
            <Image
              src={packageData.file_name}
              className="h-20 w-20"
              height={20}
              width={20}
              alt="img"
            />
          ) : (
            <Image
              src={AlternateImg}
              className="h-20 w-20"
              height={20}
              width={20}
              alt="img"
            />
          )
        ) : null}

        <div className="grid  lg:grid-cols-2 gap-6">
          <div className="file-input-container col-span-1">
            <label>Upload Images</label>
            <span>
              <input
                type="file"
                className="py-3 border-[1px] border-gray-200 rounded-lg h-[50px] w-full  mt-2  custom-file-input grid"
                name="file"
                accept="image/*"
                id="file-input"
                onChange={handleImageChange}
                alt=""
              />

              <label htmlFor="file-input">
                <span className="custom-file-input-button2 font-thin  hover:bg-[hsl(0,0%,95%)]">
                  Choose file{" "}
                </span>{" "}
                <span className="bg-white relative top-[-36px] pl-[13px]">
                  No file chosen
                </span>
              </label>
            </span>
          </div>
          <div className=" w-full z-40  relative">
            <label>Date</label>
            <div className="">
              <div className="date-table">
                <Datetime
                  value={
                    packageData.start_date instanceof Date
                      ? packageData.start_date
                      : new Date(packageData.start_date)
                  }
                  onChange={(date) => {
                    setPackageData({ ...packageData, start_date: date });
                    setErrors({ ...errors, start_date: "" });
                  }}
                  inputProps={{
                    className:
                      "py-3 border-[1px] border-gray-200 rounded-l-lg h-[48px]  mt-2  pr-5 px-3 focus:outline-none focus:border-gray-300  z-30  custom-datetime-picker  ",
                  }}
                  className="absolute z-30 border-gray-200 rounded-lg h-[48px]  w-[95.5%] focus:outline-none "
                  timeFormat={false}
                />{" "}
                <div className="w-100% border border-gray-200 bg-[#f8f9fa] h-[48px] rounded-lg text-end flex items-center pl-[96%] relative top-[-40px] ">
                  <LuCalendar className="text-[18px] text-[#232323]  " />{" "}
                </div>
              </div>
            </div>
            {errors.start_date && (
              <p className="text-red-500 text-sm">{errors.start_date}</p>
            )}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 mt-[-20px] ">
          <div className="lg:flex gap-6 mb-4">
            <FormInput
              label="Title"
              type="text"
              name="title"
              value={packageData.title}
              onChange={handleChange}
              required={true}
              error={errors.title}
            />

            <div className="lg:w-full">
              <label>Country</label>
              <br />
              <CountryDropdown
                classes={`border-[1px] rounded-lg h-[50px] w-full pl-2 mt-2 bg-white ${
                  errors.country ? "border-red-500" : "border-gray-200"
                }`}
                value={packageData.country}
                onChange={(val: any) => {
                  setPackageData({ ...packageData, country: val });
                }}
              />
              {errors.country && (
                <div className="text-red-500 text-sm mt-[2px]">
                  {errors.country}
                </div>
              )}
            </div>
          </div>

          <div className="lg:flex gap-6 mb-4">
            <div className="lg:w-full">
              <label>State</label>
              <RegionDropdown
                country={packageData.country}
                value={packageData.state}
                onChange={(val) =>
                  setPackageData({ ...packageData, state: val })
                }
                classes={`border-[1px] rounded-lg h-[50px] w-full pl-2 mt-2 bg-white ${
                  errors.state ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.state && (
                <div className="text-red-500 text-sm mt-[2px]">
                  {errors.state}
                </div>
              )}
            </div>

            <FormNumberInput
              label="Price"
              type="number"
              name="price"
              value={packageData.price}
              onChange={handleChange}
              minValue={0}
              required={true}
            />
          </div>
          <div className="lg:flex gap-6  mb-4">
            <FormNumberInput
              label="No.Of Person"
              name="no_of_person"
              type="number"
              value={packageData.no_of_person}
              onChange={handleChange}
              required={true}
              minValue={1}
              maxValue={50}
            />

            <FormNumberInput
              label="No. of day & Night"
              name="days_and_night"
              type="number"
              value={packageData.days_and_night}
              onChange={handleChange}
              required={true}
              minValue={1}
              maxValue={40}
            />
          </div>
        </div>
        <div className="lg:flex gap-6  pb-2 lg:pb-0 mb-4">
          {" "}
          <FormNumberInput
            label="Offer"
            name="offer"
            type="number"
            value={packageData.offer}
            onChange={handleChange}
            required={false}
            minValue={0}
            maxValue={50}
          />{" "}
          <span className="w-full z-30">
            <SelectInput
              label="Category"
              name="category"
              value={packageData.category || "Select a category"}
              options={[
                "Select a category",
                "tours",
                "travels",
                "attractions",
                "day trips",
                "indoor",
                "outdoor activities",
                "concert & show",
                "sight seeing",
              ]}
              onChange={handleSelectCategoryChange}
              disabledValue="Select a category"
            />
          </span>
        </div>

        <div className="">
          <label className="">Description</label>

          <div className="mt-2 ">
            <DraftEditing
              name="description"
              value={packageData.description}
              onEditorChange={handleEditorChange}
              customValue={
                initialPackageData ? initialPackageData.description : ""
              }
            />
          </div>
        </div>

        <div className="flex justify-center pt-3">
          <button
            className="bg-[#029e9d] text-white py-3 px-4 rounded-lg hover:bg-yellow-400 mt-3"
            type="submit"
          >
            <div className="flex">
              <div className="">
                {" "}
                <LuPlus className="text-[28px] pr-1   " />
              </div>
              <div className="mt-[3px] text-[14px]">
                {" "}
                {isEditMode ? "Update Package" : "Create Package"}
              </div>
            </div>
          </button>
        </div>
        {successMessage && (
          <div className="text-[#029e9d] flex justify-center my-5 text-[16px]  ">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddPackage;
