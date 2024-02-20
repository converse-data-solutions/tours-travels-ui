import React from "react";
import { LuGift } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const BellIconDetails = () => {
  return (
    <div className="py-2  rounded-lg  bg-white">
      <div className="triangle-outline"></div>
      <div>
        <div className="flex gap-4 px-5 py-[6px]">
          <div className="text-[14px] text-[#232323]">6 New Notifications</div>
          <div className="text-[#7987a1] text-[14px]">Clear all</div>
        </div>
        <hr></hr>
        <div className="px-5 py-3">
          <div className="order-fullbox flex  gap-4 mb-3">
            <div className="bg-[#6571ff] h-7 w-7 rounded-full flex items-center justify-center mt-2">
              <LuGift className="text-white " />
            </div>
            <div>
              <div className="order-head text-[12.992px] text-[#232323]">
                New Order.Received
              </div>
              <div className="order-time text-[12px] text-[#7987a1]">
                30 min ago
              </div>
            </div>
          </div>
          <div className="order-fullbox flex  gap-4">
            <div className="bg-[#6571ff] h-7 w-7 rounded-full flex items-center justify-center mt-1">
              <AiOutlineExclamationCircle className="text-white " />
            </div>
            <div>
              <div className="order-head text-[12px] text-[#232323]">
                Server Limit Reached!
              </div>
              <div className="order-time text-[12px] text-[#7987a1]">
                1 hrs ago
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="items-center text-center pt-[8px] pb-[2px] text-[#232323] text-[14px] font-medium">
          View all
        </div>
      </div>
    </div>
  );
};

export default BellIconDetails;
