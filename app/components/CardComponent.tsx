import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import {
  ExploreOutlined,
  LocationOnOutlined,
  OutlinedFlag,
  SignpostOutlined,
} from "@mui/icons-material";

interface CustomCardProps {
  title: string;
  reviewlabel: string;
  definition: string;
  icon: React.ReactElement;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  definition,
  reviewlabel,
  icon,
}) => (
  <div className="hover:text-white text-black">
    <Box sx={{ minWidth: 150, margin: "16px" }}>
      <div className=" rounded-lg card-sheet px-7 2xl:px-9 card-destination hover:text-white">
        <CardContent sx={{ paddingX: "10px" }}>
          <br></br>

          <div className="  text-[hsl(180,82%,35%)] text-[66px] hover:text-white">
            {icon}
          </div>

          <div className=" text-[23px] text-black font-sans font-medium pb-4 hover:text-white hoveredCard">
            {title}
          </div>
          {/*  */}
          <div className="text-[18px] text-gray-500 hover:text-white">
            {definition}
          </div>
          {/*  */}
        </CardContent>
        <CardActions>
          <div className="text-[hsl(180,82%,35%)] hover:text-white">
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
    icon: <OutlinedFlag className="text-[66px] " />,
  },
  {
    title: "Share Your Travel Locations",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    reviewlabel: "100 + Reviews",
    icon: <LocationOnOutlined className="text-[66px] " />,
  },
  {
    title: "Share Your Travel Preference",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    reviewlabel: "100 + Reviews",
    icon: <SignpostOutlined className=" text-[66px]" />,
  },
  {
    title: "Here 100% Trusted Tour Agency",

    definition:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",

    reviewlabel: "100 + Reviews",
    icon: <ExploreOutlined className="text-[66px] " />,
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
