import React,{ChangeEvent} from "react";

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="flex flex-col w-full mb-2">
      <label>{label}</label>
      <textarea
        className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 mt-2 mb-1"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
