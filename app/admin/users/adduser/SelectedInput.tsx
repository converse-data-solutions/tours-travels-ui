import React from "react";

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full mb-2">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        className=" mr-4 border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 mb-1 bg-white"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="hover:bg-green-600 cursor-pointer p-2"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
