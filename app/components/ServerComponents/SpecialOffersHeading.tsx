import React from "react";

const SpecialOffersHeading = () => {
  return (
    <div className="">
      <br></br>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[#FDC703] text-[22px] font-serif font-normal lg:text-2xl">
          Top Offers
        </div>
        <div className="lg:px-[15%] text-center">
          <span className="text-black text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-semibold lg:font-semibold">
            Special
          </span>
          <span className="text-[#028B8A] text-[28px]  lg:text-[46px] font-serif font-semibold pr-2 ">
            Offers & Discount
          </span>

          <span className="text-black text-[28px] lg:text-[46px] font-serif pr-2 lg:pr-4 font-semibold lg:font-semibold">
            Packages
          </span>
        </div>

        <div className="text-[#777777] text-[18px] font-serif px-8 md:px-20 items-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default SpecialOffersHeading;
