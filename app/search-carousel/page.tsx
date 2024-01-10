"use client";
import Image from "next/image";
import img from "../../public/shape8.png";
import SearchBox from "../search-box/page";
import { useSession } from "next-auth/react";

const CarouselSearch = () => {
  const { data: session } = useSession();

  const isSessionPresent = !!session;

  if (!isSessionPresent) {
    return null;
  }
  return (
    <>
      <div className="w-full">
        <div className=" hidden md:block lg:flex rotate-180 ">
          <div>
            <Image
              src={img}
              height={100}
              width={1000}
              alt=""
              className="w-full h-30 "
            />
          </div>

          <div>
            <Image
              src={img}
              height={100}
              width={1000}
              alt=""
              className="w-full h-40"
            />
          </div>
          <div>
            <Image
              src={img}
              height={100}
              width={1000}
              alt=""
              className="w-full h-30"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSearch;
