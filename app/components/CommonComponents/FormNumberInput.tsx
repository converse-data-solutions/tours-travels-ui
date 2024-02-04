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
  minValue?: number;
  maxValue?: number;
}

const FormNumberInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
  required,
  minValue,
  maxValue,
}) => {
  const isPositiveInteger = (inputValue: string) => {
    const numberValue = Number(inputValue);
    return Number.isInteger(numberValue) && numberValue >= 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numberValue = Number(inputValue);

    if (
      (isPositiveInteger(inputValue) || inputValue === "") &&
      (!maxValue || numberValue <= maxValue)
    ) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col w-full text-[#232323]">
      <label>
        {label}
        {required && (
          <span className="px-1" style={{ color: "red" }}>
            *
          </span>
        )}
      </label>{" "}
      <input
        type={type}
        className={`border-[1px] border-gray-200 rounded-lg h-[48px] w-full pl-2 mt-2 mb-1  focus:border-[#cbced3] focus:outline-none ${

          error ? "border-red-500" : ""
        }`}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        min={minValue}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormNumberInput;
