"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

interface CountUpProps {
  end: number;
  duration: number;
}

const CountUpComponent: React.FC<CountUpProps> = ({ end, duration }) => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("countUpComponent");

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          setStartCounting(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="countUpComponent">
      {startCounting && <CountUp end={end} duration={duration} />}
    </div>
  );
};

export default CountUpComponent;
