import React from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="flex justify-center gap-1 md:gap-2 mb-1">
      <input
        type="radio"
        className="font-[20px]"
        id={`radio-${value}`}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />{" "}
      {label}
    </label>
  );
};

export default RadioButton;
