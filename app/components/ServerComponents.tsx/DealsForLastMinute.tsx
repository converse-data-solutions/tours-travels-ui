import React from "react";
import LastMinutePackageCard from "../ClientComponet/LastMinutePackage";
import LastMinuteCardRight from "../ClientComponet/LastMinuteCardRight";

const DealsForLastMinute = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:px-7">
        <div className="px-4 lg:w-8/12 xl:w-7/12">
          <LastMinutePackageCard />
        </div>
        <div className="lg:w-4/12 xl:w-5/12  ">
          <LastMinuteCardRight />
        </div>
      </div>
    </div>
  );
};

export default DealsForLastMinute;
