import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PackageSlider from "./OurPartnersSlider";

const PartnersHeading = () => {
  return (
    <div className=" ">
      <div className="xl:pl-[33vh] xl:pr-[20vh]   px-[10vh] md:px-[5vh]">
        <PackageSlider />
      </div>
    </div>
  );
};

export default PartnersHeading;
