"use client";
import React, { useEffect } from "react";

interface DataFetcherProps {
  onDataFetched: (data: any) => void;
}

const GetApiPackage: React.FC<DataFetcherProps> = ({ onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/package/get`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        const userDataArray = responseData.data;
        onDataFetched(userDataArray);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return null;
};

export default GetApiPackage;
