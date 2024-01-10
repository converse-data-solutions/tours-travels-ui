import React from "react";
import { LuGift } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const BellIconDetails = () => {
  return (
    <div className="py-2  rounded-lg shadow-md bg-white">
      <div className="triangle-outline"></div>
      <div>
        <div className="flex gap-4 px-5">
          <div>6 New Notifications</div>
          <div className="text-gray-500">Clear all</div>
        </div>
        <hr></hr>
        <div className="px-5 py-3">
          <div className="order-fullbox flex  gap-4 mb-3">
            <div className="bg-[#6571ff] h-7 w-7 rounded-full flex items-center justify-center mt-2">
              <LuGift className="text-white " />
            </div>
            <div>
              <div className="order-head text-[12px]">New Order.Received</div>
              <div className="order-time">30 min ago</div>
            </div>
          </div>
          <div className="order-fullbox flex  gap-4">
            <div className="bg-[#6571ff] h-7 w-7 rounded-full flex items-center justify-center mt-1">
              <AiOutlineExclamationCircle className="text-white " />
            </div>
            <div>
              <div className="order-head text-[12px]">
                Server Limit Reached!
              </div>
              <div className="order-time">1 hrs ago</div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="items-center text-center py-1">View all</div>
      </div>
    </div>
  );
};

export default BellIconDetails;
