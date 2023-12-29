"use client";
import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import FormInput from "../CommonComponents/FormInput";
import { useState } from "react";
import { comment } from "postcss";

interface UserData {
  name: string;
  email: string;
  comment: string;
}

const playFair = Playfair_Display({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const DestinationReview = () => {
  const [data, setData] = useState<UserData>({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (value.length <= 100) {
      setData({ ...data, [name]: value });
    } else {
      alert("Textarea input is too long! Max length is 100 characters.");
    }
  };

  return (
    <div className="pt-4 lg:pt-0">
      <div className="text-[22px] font-bold" style={playFair.style}>
        Write A Review
      </div>
      <form>
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="text-[16px]" style={poppins.style}>
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              type="text"
              required={true}
              placeholder="Name"
              className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-5  mt-4"
            />
          </div>
          <div className="text-[16px]" style={poppins.style}>
            {" "}
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              type="email"
              required={true}
              placeholder="Email"
              className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-5  mt-4"
            />{" "}
          </div>
        </div>

        <div className="text-[16px]" style={poppins.style}>
          <textarea
            name="comment"
            value={data.comment}
            onChange={handleTextareaChange}
            placeholder="Comment"
            className="border-[1px] border-gray-200 rounded-lg h-[120px] w-full pl-5 mt-4 mb-1 pt-3"
          />
        </div>

        <button
          className="hovering-button py-3 px-5 rounded-lg text-white text-[14px] mt-3"
          style={poppins.style}
        >
          {" "}
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default DestinationReview;
