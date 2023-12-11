import React from "react";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="my-8 flex justify-center lg:justify-start flex-row">
      <button
        className="bg-white text-[hsl(180,82%,35%)] hover:text-white hover:bg-[hsl(180,82%,35%)] py-2 px-3 rounded-lg mr-1 border-[1px] border-gray-200"
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
      >
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${
            currentPage === pageNumber
              ? "active-page"
              : "bg-white text-[hsl(180,82%,35%)]"
          } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="bg-white text-[hsl(180,82%,35%)] hover:bg-[hsl(180,82%,35%)] hover:text-white py-2 border-[1px] border-gray-200 px-3 rounded-lg mr-1"
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBar;
