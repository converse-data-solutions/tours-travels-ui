"use client";
import React, { useState, useEffect } from "react";
import { LargeScreenDropdown } from "../CommonComponents/LargeScreenDropDown";
import { HomeDropDown } from "../CommonComponents/HomePageDropDown";

const ScrollDetailsComponent = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDirection =
        scrollPosition > prevScrollPosition ? "down" : "up";

      const showThreshold = 100;
      setShowDetails(
        scrollDirection === "up" && scrollPosition > showThreshold,
      );
      setPrevScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white px-4 py-6 h-[93px] ${
        showDetails ? "visible" : "invisible"
      }`}
    >
      <div className="z-50 bg-white">
        <LargeScreenDropdown />
        <HomeDropDown />
      </div>
    </div>
  );
};

export default ScrollDetailsComponent;
