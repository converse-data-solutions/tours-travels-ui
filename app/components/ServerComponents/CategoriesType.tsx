import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const CategoriesType = () => {
  return (
    <div className="">
      <div className="text-[26px] font-bold pb-2" style={playFair.style}>
        Categories Type
      </div>

      <div
        className="flex"
        style={{
          height: "2px",
        }}
      >
        <div style={{ flex: "15%", background: "#029e9d" }}></div>
        <div style={{ flex: "85%", background: "#f1f1f1" }}></div>
      </div>

      <br></br>

      <div
        className="flex justify-between text-[16px] pb-4 pt-2"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Tours
        </div>
        <div>92</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Attractions
        </div>
        <div>22</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Day Trips
        </div>
        <div>35</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Outdoor Activities
        </div>
        <div>41</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Concert & Show
        </div>
        <div>11</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Indoor
        </div>
        <div>61</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Sight Seeing
        </div>
        <div>18</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input type="checkbox" /> Travels
        </div>
        <div>88</div>
      </div>
    </div>
  );
};

export default CategoriesType;
