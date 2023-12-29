import React from "react";
import LastMinutePackageCard from "../ClientComponets/LastMinutePackage";
import LastMinuteCardRight from "../ClientComponets/LastMinuteCardRight";

const DealsForLastMinute = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row ">
        <div className="px-4 lg:w-8/12 xl:w-7/12">
          <LastMinutePackageCard />
        </div>
        <div className=" px-4 lg:px-0  lg:w-4/12 xl:w-5/12  ">
          <LastMinuteCardRight />
        </div>
      </div>
    </div>
  );
};

export default DealsForLastMinute;
