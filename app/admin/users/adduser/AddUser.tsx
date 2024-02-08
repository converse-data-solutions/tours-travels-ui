"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import FormInput from "../../../components/CommonComponents/FormInput";
import RadioButton from "../../../components/CommonComponents/Radiobutton";
import TextArea from "./TextArea";
import SelectInput from "../../../components/CommonComponents/SelectedInput";
import Image from "next/image";
import AlternateImg from "../../../../public/alternative.png";
import { LuArrowLeft } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import CustomDropdown from "@/app/components/ClientComponets/CustomDropDown";
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
  agent_position: string;
  [key: string]: any;
}
interface AddUserProps {
  isEditMode: boolean;
  initialUserData?: UserdataType;
  isHeadpart: boolean;
}
interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  mobile_number?: string;
}

const AddUser = ({ isEditMode, initialUserData, isHeadpart }: AddUserProps) => {
  const { id } = useParams<{ id: string }>();
  const [successMessage, setSuccessMessage] = useState("");
  const [showAdditionalDropdown, setShowAdditionalDropdown] = useState(false);

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
      role_id: "2",
      agent_position: "",
    },
  );

  let [file, setFile] = useState<File | string>();
  const [selectedFile, setSelectedFile] = useState(null);

  const [errors, setErrors] = useState({
    img: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_number: "",
  });

  const validateInput = (fieldName: string, value: string) => {
    let errorMessage = "";

    const nameRegex = /^[A-Za-z]+$/;
    const mobileNumberRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    } else if (fieldName === "email") {
      if (value.trim() === "") {
        errorMessage = "Email is required";
      } else if (!emailRegex.test(value)) {
        errorMessage = "Invalid email format";
      } else if (!value.includes("@")) {
        errorMessage = "Email must contain '@'";
      } else if (/[A-Z]/.test(value)) {
        errorMessage = "Email should not contain uppercase letters";
      } else if (/[!#$%^&*()+={}\[\]:;<>,?~\\/]/.test(value)) {
        errorMessage = "Email should not contain unwanted symbols";
      }
    } else if (fieldName === "mobile_number") {
      if (value.trim() === "") {
        errorMessage = "Mobile Number is required";
      } else if (!mobileNumberRegex.test(value)) {
        errorMessage = "Invalid Mobile Number";
      }
      console.log(`Mobile Number Error: ${errorMessage}`);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
    return errorMessage;
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
            role_id: getApiData.data.role_id.toString(),
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
      const errorMessage = validateInput(fieldName, userData[fieldName]);
      if (errorMessage) {
        errors[fieldName as keyof FormErrors] = errorMessage;
      }
    });

    const hasErrors = Object.values(errors).some((error) => error !== "");

    let hasValidationErrors = false;
    Object.keys(userData).forEach((fieldName) => {
      validateInput(fieldName, userData[fieldName]);
      if (fieldName === "mobile_number" && errors.mobile_number) {
        hasValidationErrors = true;
      }
      if (
        (fieldName === "first_name" || fieldName === "last_name") &&
        errors[fieldName]
      ) {
        hasValidationErrors = true;
      }
    });

    if (hasErrors) {
      return false;
    }

    if (!hasErrors) {
      if (isEditMode && id) {
        try {
          console.log("step3");
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
                setSuccessMessage("User updated successfully!");
                setTimeout(() => {
                  setSuccessMessage("");
                }, 5000);
              } else {
                console.error(
                  "Error uploading image:",
                  uploadImageResponse.status,
                );
                window.location.reload();
              }
            }
            setSuccessMessage("User updated successfully!");
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

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert("Please select a valid image file.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSelectRoleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    if (name === "role_id" && value === "3") {
      setShowAdditionalDropdown(true);
    } else {
      setShowAdditionalDropdown(false);
    }
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
  const handleSelectPositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value;
    setUserData((prevData) => ({ ...prevData, agent_position: selectedValue }));
  };

  return (
    <div className="bg-[#f9fafb] px-3 md:px-6">
      {isHeadpart && (
        <div className="md:flex justify-between mt-7 md:mt-3 lg:mt-3 ">
          <div className="flex-row text-center">
            <h2 className="text-gray-500 md:pt-5 lg:pt-5">
              <span className="text-[#029e9d] hover:text-[#6f42c1]">
                Dashboard
              </span>{" "}
              <span className="text-[#7987a1] pl-[2px] pr-[2px]">/</span>{" "}
              <span className="text-[#029e9d] hover:text-[#6f42c1]">
                User Management
              </span>{" "}
              <span className="text-[#7987a1] pl-[2px] pr-[2px]">/</span>{" "}
              <span className="text-[#7987a1]">
                {" "}
                {isEditMode ? "Update User" : "Add User"}
              </span>
            </h2>
          </div>
          <div className="flex-row mt-3 text-center ">
            <button
              className="bg-[#029e9d] text-white py-[13px] pl-[17px] pr-[14px] w-[141px] rounded-lg  hover:bg-yellow-400 gap-1"
              onClick={handleInput}
            >
              <div className="flex">
                <div className=" pr-[2px]  ">
                  {" "}
                  <LuArrowLeft className="text-[25px] pb-[2px] text-white" />
                </div>{" "}
                <div className="text-[15px]">Back To List</div>
              </div>
            </button>
          </div>
        </div>
      )}

      <form
        className="  formshadow pl-[20px] bg-[#ffffff] border-[1px] border-gray-100 shadow-lg rounded-lg pb-[18px] mb-12 mt-4 pr-6 "
        onSubmit={(e) => handleSubmit(e)}
        encType="multipart/form-data"
      >
        <h4 className="text-[#232323]  text-[20px] font-semibold pt-5">
          User Setup
        </h4>
        <br />
        <label className="text-[#232323]">Upload Category Icon</label>
        <br />
        {isEditMode ? (
          userData.file_name !== null && userData.file_name !== undefined ? (
            <Image
              src={AlternateImg}
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
              className="border-[1px] py-2 h-[50px] border-gray-200 rounded-lg w-full  grid grid-cols-1 mr-4 mb- pl-2 mt-2 custom-file-input"
              name="image"
              accept="Image/*"
              id="file-input"
              onChange={handleImageChange}
              alt=""
            />
            <label htmlFor="file-input">
              <span className="custom-file-input-button font-thin  hover:bg-[hsl(0,0%,95%)] text-[#232323] ">
                Choose file{" "}
              </span>{" "}
            </label>
          </span>
        </div>
        <div className="w-full grid grid-cols-1">
          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="First Name"
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
              label="Email Address"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <FormInput
              label="Phone Number"
              type="text"
              name="mobile_number"
              value={userData.mobile_number}
              onChange={handleChange}
              error={errors.mobile_number}
              required
            />
          </div>
          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <div className="flex flex-col w-full">
              <label className="text-[#232323]">Gender</label>
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

            <span className="z-50 w-[100%]">
              <SelectInput
                label="Country"
                name="country"
                value={userData.country || "Select a country"}
                options={["Select a country", "India", "china", "Others"]}
                onChange={handleSelectChange}
                disabledValue="Select a country"
              />
            </span>
          </div>
          <div className="lg:flex gap-6 ">
            <SelectInput
              label="Language"
              name="default_language"
              value={userData.default_language || "Select a language"}
              options={["Select a language", "Tamil", "English", "Hindi"]}
              onChange={handleSelectChange}
              disabledValue="Select a language"
            />

            <span className="z-40 w-[100%]">
              <SelectInput
                label="Currency"
                name="default_currency"
                value={userData.default_currency || "Select a currency"}
                options={["Select a currency", "USD", "CAD", "Other"]}
                onChange={handleSelectChange}
                disabledValue="Select a currency"
              />
            </span>
          </div>
        </div>
        <div className="lg:flex gap-6 ">
          <FormInput
            label="Social Media link"
            name="social_media_link"
            value={userData.social_media_link}
            onChange={handleChange}
          />

          <span className="z-10 w-[100%]">
            {" "}
            <CustomDropdown
              label="Select Role"
              name="role_id"
              value={userData.role_id || "2"}
              options={[
                { label: "Admin", value: "1" },
                { label: "Consumer", value: "2" },
                { label: "Agent", value: "3" },
              ]}
              onChange={handleSelectRoleChange}
            />
          </span>
        </div>

        {showAdditionalDropdown && (
          <SelectInput
            label="Additional Role"
            name="agent_position"
            value={userData.agent_position || "Select a Agent position"}
            options={[
              "Select a Agent Position",
              "Supervisor1",
              "Assistant Manager",
              "Senior Officer",
              "Head Officer",
            ]}
            onChange={handleSelectPositionChange}
            disabledValue="Select a Agent Position"
          />
        )}
        <div className="flex justify-center pt-3">
          <button
            className="bg-[#029e9d] text-white py-3 pr-4 pl-[18px] rounded-lg hover:bg-[#ffc107] mt-3"
            type="submit"
          >
            <div className="flex">
              <div className="">
                {" "}
                <LuPlus className="text-[28px] pr-1   " />
              </div>
              <div className="mt-[3px]">
                {" "}
                {isEditMode ? "Update User" : "Add User"}
              </div>
            </div>
          </button>
        </div>
        {successMessage && (
          <p className="text-[#029e9d] flex justify-center mt-4">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddUser;
