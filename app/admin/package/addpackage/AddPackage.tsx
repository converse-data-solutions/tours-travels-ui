'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import FormInput from "@/app/signin/FormInput";
import RadioButton from "@/app/components/Radiobutton";
import TextArea from "@/app/components/TextArea";
import SelectInput from "@/app/components/SelectedInput";
import apiConfiguration from "@/app/config";
import 'draft-js/dist/Draft.css';
import DraftEditing from "./DraftEditing";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { ClassNames } from "@emotion/react";

// import { countries, states } from 'country-list';


// import "react-country-state-city/dist/react-country-state-city.css";

interface PackageDataType {
  title: string;
  start_date: Date|string;
  file_name: File | any;
  destination: string;
  country: string;
  state:string;
  price:string;
  no_of_person: string;
  days_and_night: string;
  description: string;
  
}
interface AddUserProps {
  isEditMode: boolean;
  initialPackageData?: PackageDataType;
}

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
      state:"",
      price: "",
      no_of_person: "",
      days_and_night: "",
      description: ""
      
    }
  );
  const [editorState, setEditorState] = useState();
  let [file, setFile] = useState<File | string>();
  // const [errors, setErrors] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   mobile_number: "",
  // });

  // const validateInput = (fieldName: string, value: string) => {
  //   let errorMessage = "";

  //   const nameRegex = /^[A-Za-z]+$/;

  //   if (fieldName === "title") {
  //     if (value.trim() === "") {
  //       errorMessage = "First Name is required";
  //     } else if (!nameRegex.test(value)) {
  //       errorMessage = "First Name can only contain alphabetic characters";
  //     }
  //   } else if (fieldName === "") {
  //     if (value.length < 6) {
  //       errorMessage = "Password must be at least 6 characters long";
  //     } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
  //       errorMessage = "Password must contain at least one special character";
  //     } else if (!/\d/.test(value)) {
  //       errorMessage = "Password must contain at least one number";
  //     }
  //   } else if (fieldName === "mobile_number" && /^[6-9]\d{9}$/.test(value)) {
  //   } else {
  //     errorMessage = "Invalid Mobile Number, ";
  //   }

  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [fieldName]: errorMessage,
  //   }));
  // };

  useEffect(() => {
    if (isEditMode && id) {
      // const token = localStorage.getItem("accessToken");
      fetch(
        `${apiConfiguration.externalservice.backendUrl}/package/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      )
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

    // Object.keys(userData).forEach((fieldName) => {
    //   validateInput(fieldName, userData[fieldName]);
    // });

    // const hasErrors = Object.values(errors).some((error) => error !== "");

    // if (!hasErrors) {
      if (isEditMode && id) {
        try {
          const { file_name, ...userDataWithoutFilename } = packageData;
          // const token = localStorage.getItem("accessToken");
          const response = await fetch(
            `${apiConfiguration.externalservice.backendUrl}/package/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(userDataWithoutFilename),
            }
          );

          if (response.status === 200) {
            const newPackage = await response.json();
            console.log(newPackage);
            console.log("User updated successfully");

            if (file) {
              const formData = new FormData();
              formData.append("file", file);

              const uploadImageResponse = await fetch(
                `${apiConfiguration.externalservice.backendUrl}/package/upload/${id}`,
                {
                  method: "POST",
                  body: formData,
                }
              );

              if (uploadImageResponse.status === 201) {
                console.log("Image uploaded successfully");
              } else {
                console.error(
                  "Error uploading image:",
                  uploadImageResponse.status
                );
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
          const { file_name, ...userDataWithoutFilename } = packageData;
          console.log(userDataWithoutFilename);
          const response = await fetch(
            `${apiConfiguration.externalservice.backendUrl}/package/create`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userDataWithoutFilename),
            }
          );

          if (response.status === 200) {
            console.log("Package added successfully");
            const newPackage = await response.json();
            console.log(newPackage)
            const formData = new FormData();
            if (file instanceof File) {
              formData.append("file", file);
            }

            const uploadImageResponse = await fetch(
              `${apiConfiguration.externalservice.backendUrl}/package/upload/${newPackage.data.id}`,
              {
                method: "POST",

                body: formData,
              }
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
                uploadImageResponse.status
              );
            }
          } else {
            console.error("Error adding user:", response.status);
          }
        } catch (error) {
          console.error("Error submitting data:", error);
        }
      }
    // }
  };

  const handleEditorChange = (content:any) => {
    setPackageData({
      ...packageData,
      description: content,
    });
  };
  function handleInput(event: any) {
    if (localStorage.getItem("accessToken") === null) {
      const userConfirmed = window.confirm(
        "You are not signed in to your account. Do you want to sign in your account?"
      );

      if (userConfirmed) {
        window.location.replace("/signin");
      } else {
        return;
      }
    } else {
      window.location.replace("/user");
    }
  }

  function handleImageChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if (value.length <= 100) {
      setPackageData({ ...packageData, [name]: value });
    } else {
      alert("Textarea input is too long! Max length is 100 characters.");
    }
  };

  const handleradioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (event.target.type === "radio") {
      setPackageData({ ...packageData, [name]: value });
    }
  };

  return (
    <div className="bg-[#f9fafb] px-3 md:px-6">
      <div className="md:flex justify-between mt-7 md:mt-3 lg:mt-3 ">
        <div className="flex-row text-center">
          <h2 className="text-gray-500 md:pt-5 lg:pt-5">
            <span className="text-[rgb(2,158,157)]">Dashboard</span> /{" "}
            
            {isEditMode ? "Update Package" : " Add Package"}
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
        className=" pt-10 formshadow pl-[20px] bg-[#ffffff] border-[1px] border-gray-100 shadow-lg rounded-lg pb-[18px] mb-12 mt-4 pr-6 "
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        
        

        {isEditMode && (
          <img src={packageData.file_name} className="h-20 w-40"></img>
        )}
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
            <label htmlFor="file-input" className=" bg-black custom-file-input-button2  ">
              Choose File
            </label>
          </span>
        </div>
        <div>
          <label>Date</label>
          <input
  type="date"
  className="py-3 border-[1px] border-gray-200 rounded-lg h-[50px] w-full mt-2 mb-2 pr-5"
  name="start_date"
  value={packageData.start_date instanceof Date ? packageData.start_date.toISOString().split('T')[0] : packageData.start_date}
  onChange={handleChange}
/>
        </div>
        </div>
        <div className="w-full grid grid-cols-1">
          

          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="Title"
              type="text"
              name="title"
              value={packageData.title}
              onChange={handleChange}
              required={true}
            />

 <div className="lg:w-full">
            <label>Country</label><br/>
          <CountryDropdown
            value={packageData.country}
            onChange={(val: any) => {
              setPackageData({ ...packageData, country: val });
             
            }}
            // className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 bg-white"
            
          />
      </div>
<div className="lg:w-full">
          <label>State</label>
         <RegionDropdown
            country={packageData.country}
            value={packageData.state}
            onChange={(val) => setPackageData({ ...packageData, state: val })}
            
              //  className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 bg-white"
          />
          
        </div>
          </div>
          <div className="lg:flex gap-6 mb-2">
            <FormInput
              label="Price"
              type="text"
              name="price"
              value={packageData.price}
              onChange={handleChange}
              required={true}
            />

            <FormInput
              label="No.Of Person"
              name="no_of_person"
              type="number"
              value={packageData.no_of_person}
              onChange={handleChange}
              
              required={true}
            />
          </div>
          <div className="lg:flex gap-6 mb-2">
          <FormInput
              label="No. of day & Night"
              name="days_and_night"
              type="text"
              value={packageData.days_and_night}
              onChange={handleChange}
              
              required={true}
            />
          </div>

          
          
        </div>
        <div className="">
          <label>Description</label>
          <span className="mt-2"><DraftEditing 
          name="description"
          value={packageData.description}
          onEditorChange={handleEditorChange}
          
          
        /></span>
        </div>

       
        

        <div className="flex justify-center pt-3">
          <button
            className="bg-[hsl(180,82%,35%)] text-white py-3 px-4 rounded-lg hover:bg-yellow-400 mt-3"
            type="submit"
          >
            <FontAwesomeIcon icon={faPlus} />{" "}
            {isEditMode ? "Update Package" : "Create Package"}
          </button>
        </div>
        {successMessage && (
          <p className="text-green-700 flex justify-center">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AddPackage;
