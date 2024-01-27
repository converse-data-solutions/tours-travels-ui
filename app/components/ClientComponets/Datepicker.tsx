"use client";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css"; // Import the default styles for react-datetime

const Datepicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (e: any) => {
    // You can handle the input change here if needed
  };

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const inputStyle = {
    // Customize the input box style as needed
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Select Date"
        style={inputStyle}
        onClick={handleInputClick}
        onChange={handleInputChange}
      />
      {showCalendar && (
        <Datetime
          closeOnSelect
          onChange={handleCalendarClose}
          input={false}
          //   renderInput={false}
          timeFormat={false}
          inputProps={{ style: { display: "none" } }}
          className="custom-datepicker" // Add your custom date picker class
        />
      )}
    </div>
  );
};

export default Datepicker;
