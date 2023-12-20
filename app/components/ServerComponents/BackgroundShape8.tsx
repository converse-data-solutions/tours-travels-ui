import React from "react";
import Image from "next/image";
import img from "../../../public/shape8.png";

const BackgroundShape = () => {
  return (
    <div className="flex relative  top-[-70px]">
      <div>
        {" "}
        <Image
          src={img}
          alt="img"
          height={100}
          width={1000}
          className=" h-30 w-[100%] bg-transparent rotate-180"
        />
      </div>
      <div className="hidden lg:inline-block">
        {" "}
        <Image
          src={img}
          alt="img"
          height={100}
          width={1000}
          className=" h-30 w-[100%] bg-transparent rotate-180"
        />
      </div>
      <div className="hidden lg:inline-block">
        {" "}
        <Image
          src={img}
          alt="img"
          height={100}
          width={1000}
          className=" h-35 bg-transparent rotate-180"
        />
      </div>
    </div>
  );
};

export default BackgroundShape;
