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
  category: string;
  count: number;
}

const CategoriesType = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
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

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/groupbycategory/details`,
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
        setCategories(userDataArray);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
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

      <div>
        {categories.map((item) => (
          <div
            key={item.category}
            className={`flex justify-between text-[16px] pb-4 pt-2`}
            style={poppins.style}
          >
            <div>
              <input
                type="checkbox"
                name="category"
                value={item.category}
                checked={selectedCategory === item.category}
                onChange={() => handleCategoryChange(item.category)}
              />{" "}
              {item.category}
            </div>
            <div>{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesType;
