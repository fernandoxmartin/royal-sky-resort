import React from "react";
import hero from "../Images/dine.jpg";
import { Hero, Tag } from "../globalStyles";
import { getFeatures } from "../Components/Features";

const Dine = ({ items }) => {
  const features = getFeatures(items);

  return (
    <div>
      <Hero img={hero} />
      <Tag>
        <h1>EXPERIENCE & INDULGE</h1>
        <h3>TRY OUR NUMEROUS CUISINES GUARANTEED TO SATISFY YOUR CRAVINGS.</h3>
      </Tag>
      {features}
    </div>
  );
};

export default Dine;
