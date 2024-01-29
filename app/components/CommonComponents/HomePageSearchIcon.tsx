import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const reDirect = () => {
  window.location.replace("/");
};

const HomePageSearchIcon = () => {
  return (
    <div className="h-[8vh] w-screen bg-white">
      <div className="bg-white px-10 flex justify-end ">
        <button
          onClick={reDirect}
          className="bg-[hsl(180,82%,35%)] text-white py-3 px-4 rounded-lg hover:bg-yellow-400 mt-3"
        >
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="h-[92vh] pb-16 flex justify-center items-center bg-white">
        <form className="flex flex-col items-center">
          <div className="flex justify-center ">
            <input
              type="search"
              placeholder="type keyword(s) here"
              className=" inputcontainer py-12 px-10 border-b-2 border-solid border-gray-400 text-xl lg:text-5xl transition duration-300 ease-in-out focus:border-gray-500 focus:outline-none"
            />
            <hr className="text-lime-400 absolute w-full bottom-0 left-0" />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[hsl(180,82%,35%)] text-white py-3 px-4 rounded-lg hover:bg-yellow-400 mt-3"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default HomePageSearchIcon;
