import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { SlCompass, SlFlag, SlLocationPin } from "react-icons/sl";
import { SlDirections } from "react-icons/sl";
import { Playfair_Display,Poppins } from "next/font/google";


interface CustomCardProps {
  title: string;
  reviewlabel: string;
  definition: string;
  icon: React.ReactElement;
}
const playFair=Playfair_Display({
  subsets:["latin"]
})

const poppins=Poppins({
  subsets:["latin"],
  weight:'400',
  
})
const iconStyle = {
  fontSize: "55px",
};


const CustomCard: React.FC<CustomCardProps> = ({
  title,
  definition,
  reviewlabel,
  icon,
}) => (
  <div className="hover:text-white  lg:px-0">
    <Box sx={{ minWidth: 150, margin: "16px" }}>
      <div className=" rounded-lg card-sheet px-7 2xl:px-9 card-destination hover:text-white hoveredCard">
        <CardContent sx={{ paddingX: "10px" }}>
          <br></br>

           <div className="text-custom-color  hover:text-white font-thin">
            {icon}
          </div> 
           

          <div className=" text-[22px] text-black font-sans  pb-4 hover:text-white hoveredCard font-bold" style={playFair.style}>
            {title}
          </div>
          {/*  */}
          <div className="text-[16px] text-gray-500 hover:text-white" style={poppins.style}>
            {definition}
          </div>
          {/*  */}
        </CardContent>
        <CardActions>
          <div className="text-custom-color text-[16px] hover:text-white">
            {reviewlabel}
          </div>
        </CardActions>
        <br></br>
        <br></br>
      </div>
    </Box>
  </div>
);

const cardsData = [
  {
    title: "Tell Us What You Want To Do",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    reviewlabel: "100 + Reviews",
    icon: <SlFlag className="mb-2 mt-3  text-[55px] font-thin" />,
  },
  {
    title: "Share Your Travel Locations",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    reviewlabel: "100 + Reviews",
    icon: <SlLocationPin className="mb-2 mt-3 font-thin text-[55px]" />,
  },
  {
    title: "Share Your Travel Preference",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    reviewlabel: "100 + Reviews",
    icon: <SlDirections className=" mb-2 mt-3 font-thin text-[55px]" />,
  },
  {
    title: "Here 100% Trusted Tour Agency",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",

    reviewlabel: "100 + Reviews",
    icon: <SlCompass  className=" mb-2 mt-3 font-thin text-[55px]"/>,
  },
];

export default function App() {
  return (
    <div className="flex justify-center h-full  flex-col md:grid grid-cols-2  lg:grid-cols-4  w-full  hover:text-white ">
      {cardsData.map((card, index) => (
        <CustomCard key={index} {...card} />
      ))}
    </div>
  );
}
