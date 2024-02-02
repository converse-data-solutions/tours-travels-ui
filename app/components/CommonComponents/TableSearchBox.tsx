import React from "react";

interface SearchBarProps {
  searchQuery: string;
  placeholder: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TableSearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  placeholder,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border-[1px] w-full px-4 py-3 mb-2 lg:mb-[0px] mt-[2px] border-gray-200 rounded-lg outline-none md:w-1/3 lg:w-[200%] lg:h-[48px] focus:outline-none focus:border-[#cbced3] "
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default TableSearchBar;
