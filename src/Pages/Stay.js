import React from "react";
import hero from "../Images/stay.jpeg";
import { Hero, Tag } from "../globalStyles";
import { getFeatures } from "../Components/Features";

const Stay = ({ items }) => {
  let features = getFeatures(items);

  return (
    <div>
      <Hero img={hero} />
      <Tag>
        <h1>A PLACE YOU CAN CALL HOME</h1>
        <h3>ALL ROOMS ARE CUSTOM DESIGNED TO GIVE YOU TOTAL RELAXATION.</h3>
      </Tag>
      {features}
    </div>
  );
};

export default Stay;
