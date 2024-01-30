"use client";
import React from "react";
interface FormInputProps {
  label: string;
  name: string;
  value: string;
  error?: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
  required,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label>{label}</label>
      <input
        type={type}
        className={`border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 mb-1 focus:outline-none  ${
          error ? "border-red-500" : ""
        }`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
