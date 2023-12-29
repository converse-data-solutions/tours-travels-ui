import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { Playfair_Display, Poppins } from "next/font/google";

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
  const [sliderValue, setSliderValue] = useState<number[]>([0, 2000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number[]);
  };

  return (
    <div>
      <div className="text-[26px] font-bold pb-2" style={playFair.style}>
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

      <Box sx={{ width: 300 }}>
        <Typography variant="subtitle2" gutterBottom>
          Price Range
        </Typography>
        <Slider
          value={sliderValue}
          onChange={handleChange}
          valueLabelFormat={valueLabelFormat}
          marks={marks}
          step={1}
          min={0}
          max={20000}
          sx={{
            color: "#029e9d",
            height: 7,
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
        <Typography variant="caption" color="textSecondary">
          <div className="flex justify-between">
            {" "}
            <div>{sliderValue[0]}$</div> <div>{sliderValue[1]}$</div>
          </div>
        </Typography>
      </Box>
    </div>
  );
};

export default DurationRange;
