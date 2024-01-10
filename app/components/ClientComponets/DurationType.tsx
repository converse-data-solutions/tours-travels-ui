"use client";
import React, { useEffect, useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

interface Categories {
  duration: string;
  count: number;
}

const DurationType = () => {
  const [duration, setDuration] = useState<Categories[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const createQueryString = useCallback(
    (name: string, values: string[]) => {
      const params = new URLSearchParams(searchParams);

      if (values.length === 0) {
        params.delete(name);
      } else {
        params.set(name, values.join(","));
      }

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/groupbyduration/details`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        const userDataArray = responseData.data;
        setDuration(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleCategoryChange = (durationValue: string) => {
    if (durationValue === "selectAll") {
      setSelectAll(!selectAll);
      setSelectedDuration(
        selectAll ? [] : duration.map((item) => item.duration),
      );
    } else {
      const numericRange = durationValue.match(/\d+-\d+/)?.[0] || "";

      const updatedSelectedDuration = selectedDuration.includes(numericRange)
        ? selectedDuration.filter((item) => item !== numericRange)
        : [...selectedDuration, numericRange];

      setSelectedDuration(updatedSelectedDuration);
      //   const queryString = createQueryString("duration", selectedDuration);
      // router.push(pathname + "?" + queryString);
    }
  };

  useEffect(() => {
    const queryString = createQueryString("duration", selectedDuration);
    router.push(pathname + "?" + queryString);
  }, [selectedDuration, createQueryString]);

  return (
    <div className="">
      <div className="text-[26px] font-bold pb-2 " style={playFair.style}>
        Duration Type
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

      <div>
        <div
          key="selectAll"
          className={`flex justify-between text-[16px] pb-4 pt-2`}
          style={poppins.style}
        ></div>

        {duration.map((item) => (
          <div
            key={item.duration}
            className={`flex justify-between text-[16px] pb-4 pt-2`}
            style={poppins.style}
          >
            <div>
              <input
                type="checkbox"
                name="duration"
                value={item.duration}
                onChange={() => handleCategoryChange(item.duration)}
              />{" "}
              {item.duration}
            </div>
            <div>{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DurationType;
