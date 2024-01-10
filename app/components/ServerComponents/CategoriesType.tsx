"use client";
import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const CategoriesType = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

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
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const queryString = createQueryString("category", category);
    router.push(pathname + "?" + queryString);
  };

  return (
    <div className="">
      <div className="text-[26px] font-bold pb-2 " style={playFair.style}>
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

      <form>
        <div
          className={`flex justify-between text-[16px] pb-4 pt-2`}
          style={poppins.style}
        >
          <div>
            <input
              type="checkbox"
              name="category"
              value="tours"
              checked={selectedCategory === "tours"}
              onChange={() => handleCategoryChange("tours")}
            />{" "}
            Tours
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
              name="category"
              value="attractions"
              checked={selectedCategory === "attractions"}
              onChange={() => handleCategoryChange("attractions")}
            />{" "}
            Attractions
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
              name="category"
              value="day-trips"
              checked={selectedCategory === "day-trips"}
              onChange={() => handleCategoryChange("day-trips")}
            />{" "}
            Day Trips
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
              name="category"
              value="outdoor activities"
              checked={selectedCategory === "outdoor-activities"}
              onChange={() => handleCategoryChange("outdoor-activities")}
            />{" "}
            Outdoor Activities
          </div>
          <div>41</div>
        </div>

        <div
          className="flex justify-between text-[16px] pb-4"
          style={poppins.style}
        >
          <div>
            <input
              type="checkbox"
              name="category"
              value="concert and show"
              checked={selectedCategory === "concert-and-show"}
              onChange={() => handleCategoryChange("concert-and-show")}
            />{" "}
            Concert & Show
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
              name="category"
              value="indoor"
              checked={selectedCategory === "indoor"}
              onChange={() => handleCategoryChange("indoor")}
            />{" "}
            Indoor
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
              name="category"
              value="sightseeing"
              checked={selectedCategory === "sight-seeing"}
              onChange={() => handleCategoryChange("sight-seeing")}
            />{" "}
            Sight Seeing
          </div>
          <div>18</div>
        </div>
        <div
          className="flex justify-between text-[16px] pb-4"
          style={poppins.style}
        >
          <div>
            <input
              type="checkbox"
              name="category"
              value="travels"
              checked={selectedCategory === "travels"}
              onChange={() => handleCategoryChange("travels")}
            />{" "}
            Travels
          </div>
          <div>88</div>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default CategoriesType;
