"use client";
import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { Playfair_Display, Poppins } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Mark {
  value: number;
  label: string;
}

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const marks: Mark[] = [
  {
    value: 0,
    label: "",
  },
  {
    value: 20000,
    label: "",
  },
];

const valueLabelFormat = (value: number) => `$${value}`;

const DurationRange: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [sliderValue, setSliderValue] = useState<number[]>([0, 2000]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    const newSliderValue = newValue as number[];
    setSliderValue(newSliderValue);
    const queryString = createQueryString(
      "price",
      `${newSliderValue[0]}-${newSliderValue[1]}`,
    );
    router.push(pathname + "?" + queryString);

    //  window.history.replaceState(null, "", `${pathname}?${queryString}`);
  };

  return (
    <div className="w-[100%]">
      <div className="text-[26px] font-bold pb-2" style={playFair.style}>
        Duration Type
      </div>

      <div
        className="flex w-[100%]"
        style={{
          height: "2px",
        }}
      >
        <div style={{ flex: "15%", background: "#029e9d" }}></div>
        <div style={{ flex: "85%", background: "#f1f1f1" }}></div>
      </div>

      <br />

      <Box sx={{ width: 500 }}>
        <Typography variant="subtitle2" gutterBottom>
          Price Range
        </Typography>
        <Link href="">
          <Slider
            value={sliderValue}
            onChange={handlePriceChange}
            valueLabelFormat={valueLabelFormat}
            marks={marks}
            step={1}
            min={0}
            max={20000}
            sx={{
              color: "#029e9d",
              height: 7,
              width: "100%",
              "& .MuiSlider-valueLabel": {
                backgroundColor: "transparent",
                top: 0,
              },
              "& .MuiSlider-rail": {
                boxShadow: "none",
              },
              "& .MuiSlider-thumb": {
                height: 14,
                width: 14,
                marginTop: 0,
                backgroundColor: "#ffffff",
              },
              "&:hover": {
                boxShadow: "none",
              },
            }}
          />
        </Link>
        <Typography variant="caption" color="textSecondary">
          <div className="flex justify-between xl:w-[100%]">
            {" "}
            <div>{sliderValue[0]}$</div> <div>{sliderValue[1]}$</div>
          </div>
        </Typography>
      </Box>
    </div>
  );
};

export default DurationRange;
