"use client";
import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useState } from "react";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const DurationType = () => {
  const [selectedDuration, setSelectedDuration] = useState(" ");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration);
    const queryString = createQueryString("Duration", duration);
    router.push(pathname + "?" + queryString);
  };
  return (
    <div className="">
      <div className="text-[26px] font-bold pb-2" style={playFair.style}>
        Duration Type
      </div>

      <div className="flex" style={{ height: "2px" }}>
        <div style={{ flex: "15%", background: "#029e9d" }}></div>
        <div style={{ flex: "85%", background: "#f1f1f1" }}></div>
      </div>

      <br />

      <div
        className="flex justify-between text-[16px] pb-4 pt-2"
        style={poppins.style}
      >
        <div>
          <input
            type="checkbox"
            checked={selectedDuration === "1hr"}
            onChange={() => handleDurationChange("up-to-1-hour")}
          />{" "}
          up to 1 hour
        </div>
        <div>92</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input
            type="checkbox"
            checked={selectedDuration === "1-to-2-hours"}
            onChange={() => handleDurationChange("1-to-2-hours")}
          />{" "}
          1 to 2 hours
        </div>
        <div>22</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input
            type="checkbox"
            checked={selectedDuration === "2-to-4-hours"}
            onChange={() => handleDurationChange("2-to-4-hours")}
          />{" "}
          2 to 4 hours
        </div>
        <div>35</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input
            type="checkbox"
            checked={selectedDuration === "1"}
            onChange={() => handleDurationChange("1")}
          />{" "}
          1 day
        </div>
        <div>11</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input
            type="checkbox"
            checked={selectedDuration === "2"}
            onChange={() => handleDurationChange("2")}
          />{" "}
          2 days
        </div>
        <div>61</div>
      </div>

      <div
        className="flex justify-between text-[16px] pb-4"
        style={poppins.style}
      >
        <div>
          <input
            type="checkbox"
            checked={selectedDuration === "3"}
            onChange={() => handleDurationChange("3")}
          />{" "}
          3 days
        </div>
        <div>41</div>
      </div>
    </div>
  );
};

export default DurationType;
