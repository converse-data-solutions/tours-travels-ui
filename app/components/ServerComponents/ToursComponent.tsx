import React, { FC } from "react";

interface ToursComponentProps {
  number: number;
  label: string;
}

const ToursComponent: FC<ToursComponentProps> = ({ number, label }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "10px" }}>
        <input type="checkbox" />
      </div>
      <div>
        <span>{label}</span>
        <span style={{ marginLeft: "5px" }}>{number}</span>
      </div>
    </div>
  );
};

export default ToursComponent;
