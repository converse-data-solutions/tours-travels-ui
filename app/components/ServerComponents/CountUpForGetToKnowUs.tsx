import React from "react";
import CountUpComponent from "../ClientComponets/CountUpComponent";

const CountUpForGetToKnowUs = () => {
  return (
    <div>
      <div>
        {" "}
        <CountUpComponent end={20} duration={10} />
      </div>
      <div>
        {" "}
        <p>Years Experiences</p>
      </div>

      <div>
        {" "}
        <CountUpComponent end={530} duration={3} />
      </div>
      <div>
        {" "}
        <CountUpComponent end={530} duration={3} />
      </div>
      <div>
        {" "}
        <p>Tour Packages</p>
      </div>

      <div>
        {" "}
        <CountUpComponent end={850} duration={10} />
      </div>
      <div>
        {" "}
        <p>Happy Customers</p>
      </div>

      <div>
        <CountUpComponent end={320} duration={3} />
      </div>
      <div>
        {" "}
        <p>Award Winning</p>
      </div>
    </div>
  );
};

export default CountUpForGetToKnowUs;
