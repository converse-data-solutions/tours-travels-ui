"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import FormInput from "../../../components/FormInput";
import RadioButton from "../../../components/Radiobutton";
import TextArea from "./TextArea";
import SelectInput from "../../../components/SelectedInput";
import Image from "next/image";
import AlternateImg from "../../../../public/alternative.png";

interface UserdataType {
  email: string;
  password: string;
  mobile_number: string;
  first_name: string;
  last_name: string;
  country: string;
  gender: string;
  address: string;
  social_media_link: string;
  file_name: File | any;
  default_currency: string;
  default_language: string;
  role_id: string;
  [key: string]: any;
}
interface AddUserProps {
  isEditMode: boolean;
  initialUserData?: UserdataType;
  isHeadpart: boolean;
}

const AddUser = ({ isEditMode, initialUserData, isHeadpart }: AddUserProps) => {
  const { id } = useParams<{ id: string }>();
  const [successMessage, setSuccessMessage] = useState("");

  let [userData, setUserData] = useState<UserdataType>(
    initialUserData || {
      email: "",
      password: "",
      mobile_number: "",
      first_name: "",
      last_name: "",
      country: "",
      gender: "",
      address: "",
      social_media_link: "",
      file_name: "",
      default_currency: "",
      default_language: "",
      role_id: "",
    },
  );
  let [file, setFile] = useState<File | string>();
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_number: "",
  });

  const validateInput = (fieldName: string, value: string) => {
    let errorMessage = "";

    const nameRegex = /^[A-Za-z]+$/;

    if (fieldName === "first_name") {
      if (value.trim() === "") {
        errorMessage = "First Name is required";
      } else if (!nameRegex.test(value)) {
        errorMessage = "First Name can only contain alphabetic characters";
      }
    } else if (fieldName === "password") {
      if (value.length < 6) {
        errorMessage = "Password must be at least 6 characters long";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errorMessage = "Password must contain at least one special character";
      } else if (!/\d/.test(value)) {
        errorMessage = "Password must contain at least one number";
      }
    } else if (fieldName === "mobile_number" && /^[6-9]\d{9}$/.test(value)) {
    } else {
      errorMessage = "Invalid Mobile Number, ";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  useEffect(() => {
    if (isEditMode && id) {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return;
      }
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/${id}`, {
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
          setUserData({
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

    Object.keys(userData).forEach((fieldName) => {
      validateInput(fieldName, userData[fieldName]);
    });

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      if (isEditMode && id) {
        try {
          const { file_name, ...userDataWithoutFilename } = userData;
          const token = localStorage.getItem("accessToken");
          if (!token) {
            return;
          }
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/${id}`,
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
            const newUser = await response.json();
            console.log(newUser);
            console.log("User updated successfully");

            if (file) {
              const formData = new FormData();
              formData.append("file", file);

              const uploadImageResponse = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/upload/${id}`,
                {
                  method: "POST",
                  body: formData,
                },
              );

              if (uploadImageResponse.status === 201) {
                console.log("Image uploaded successfully");
              } else {
                console.error(
                  "Error uploading image:",
                  uploadImageResponse.status,
                );
                window.location.reload();
              }
            }
            window.location.reload();
          } else {
            console.error("Error updating user:", response.status);
          }
        } catch (error) {
          console.error("Error submitting data:", error);
        }
      } else {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/create`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            },
          );

          if (response.status === 200) {
            console.log("User added successfully");
            const newUser = await response.json();
            const formData = new FormData();
            if (file instanceof File) {
              formData.append("file", file);
            }

            const uploadImageResponse = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/upload/${newUser.data.id}`,
              {
                method: "POST",

                body: formData,
              },
            );

            if (uploadImageResponse.status === 201) {
              setSuccessMessage("User added successfully!");
              console.log("Image uploaded successfully");
              setTimeout(() => {
                setSuccessMessage("");
              }, 5000);
              window.location.reload();
            } else {
              console.error(
                "Error uploading image:",
                uploadImageResponse.status,
              );
              setSuccessMessage("User added successfully!");

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
    }
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
      window.location.replace("/admin/users");
    }
  }

  function handleImageChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (value.length <= 100) {
      setUserData({ ...userData, [name]: value });
    } else {
      alert("Textarea input is too long! Max length is 100 characters.");
    }
  };

  const handleradioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (event.target.type === "radio") {
      setUserData({ ...userData, [name]: value });
    }
  };

  return (
    <div className="bg-[#f9fafb] px-3 md:px-6">
      {isHeadpart && (
        <div className="md:flex justify-between mt-7 md:mt-3 lg:mt-3 ">
          <div className="flex-row text-center">
            <h2 className="text-gray-500 md:pt-5 lg:pt-5">
              <span className="text-[rgb(2,158,157)] ">Dashboard</span> /{" "}
              <span className="text-[rgb(2,158,157)">User Management</span> /{" "}
              <span> {isEditMode ? "Update User" : "Add User"}</span>
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
      )}

      <form
        className="  formshadow pl-[20px] bg-[#ffffff] border-[1px] border-gray-100 shadow-lg rounded-lg pb-[18px] mb-12 mt-4 pr-6 "
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h4 className="text-[#232323]  text-[20px] font-semibold pt-3">
          User Setup
        </h4>
        <br />
        <label>Upload Category Icon</label>
        <br />
        {isEditMode ? (
          userData.file_name !== null && userData.file_name !== undefined ? (
            <Image
              src={userData.file_name}
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
        ) : (
          <></>
        )}

        <div className="file-input-container">
          <span>
            <input
              type="file"
              className="border-[1px] py-2 h-[50px] border-gray-200 rounded-lg w-full grid grid-cols-1 mr-4 mb- pl-2 mt-2 custom-file-input"
              name="image"
              accept="image/*"
              id="file-input"
              onChange={handleImageChange}
              alt=""
            />
            <label htmlFor="file-input" className="custom-file-input-button  ">
              Choose File
            </label>
          </span>
        </div>
        <div className="w-full grid grid-cols-1">
          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="First Name*"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              error={errors.first_name}
              required={true}
            />
            <FormInput
              label="Last Name"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="Email Address*"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Phone Number*"
              name="mobile_number"
              value={userData.mobile_number}
              onChange={handleChange}
              error={errors.mobile_number}
              required
            />
          </div>
          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="Password*"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <div className="flex flex-col w-full">
              <label>Gender</label>
              <div
                className="w-full gap-3 lg:gap-4 pt-4 green-radio "
                style={{ display: "flex" }}
              >
                <RadioButton
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={userData.gender === "Male"}
                  onChange={handleradioChange}
                />
                <RadioButton
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={userData.gender === "Female"}
                  onChange={handleradioChange}
                />
                <RadioButton
                  label="Other"
                  name="gender"
                  value="Other"
                  checked={userData.gender === "Other"}
                  onChange={handleradioChange}
                />
              </div>
            </div>
          </div>

          <div className="lg:flex gap-6 mb-2">
            <TextArea
              label="Address"
              name="address"
              value={userData.address}
              onChange={handleTextareaChange}
            />
            <SelectInput
              label="Country"
              name="country"
              value={userData.country}
              options={["India", "china", "Others"]}
              onChange={handleSelectChange}
            />
          </div>
          <div className="lg:flex gap-6 ">
            <SelectInput
              label="Language"
              name="default_language"
              value={userData.default_language}
              options={["Tamil", "English", "Hindi"]}
              onChange={handleSelectChange}
            />

            <SelectInput
              label="Currency"
              name="default_currency"
              value={userData.default_currency}
              options={["USD", "CAD", "Other"]}
              onChange={handleSelectChange}
            />
          </div>
        </div>
        <div className="lg:flex gap-6 ">
          <FormInput
            label="Social Media link"
            name="social_media_link"
            value={userData.social_media_link}
            onChange={handleChange}
          />

          <div className="flex flex-col w-full ">
            <label htmlFor="role" className="">
              Select Role
            </label>
            <select
              id="role_id"
              placeholder="select one"
              className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full grid grid-cols-1 pl-2 px-3 mt-2 mb-1 bg-white"
              name="role_id"
              value={userData.role_id}
              onChange={handleSelectChange}
            >
              <option value="1">Admin</option>
              <option value="2">Consumer</option>
              <option value="3">Agent</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center pt-3">
          <button
            className="bg-[hsl(180,82%,35%)] text-white py-3 px-4 rounded-lg hover:bg-yellow-400 mt-3"
            type="submit"
          >
            <FontAwesomeIcon icon={faUserPlus} />{" "}
            {isEditMode ? "Update User" : "Add User"}
          </button>
        </div>
        {successMessage && (
          <p className="text-green-700 flex justify-center">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AddUser;
