import React from "react";
import hero from "../Images/experience.jpeg";
import { Hero, Tag } from "../globalStyles";
import { getFeatures } from "../Components/Features";

const Experience = ({ items }) => {
  const features = getFeatures(items);

  return (
    <div>
      <Hero img={hero} />
      <Tag>
        <h1>ENJOY & RELAX</h1>
        <h3>
          EXPERIENCE COUNTLESS ACTIVITIES THAT WILL LEAVE YOU WANTING MORE.
        </h3>
      </Tag>
      {features}
    </div>
  );
};

export default Experience;
