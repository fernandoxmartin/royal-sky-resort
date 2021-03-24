import React from "react";
import hero from "../Images/home.jpg";
import { Hero, Tag } from "../globalStyles";
import { getFeatures } from "../Components/Features";

const Home = ({ items }) => {
  const features = getFeatures(items);

  return (
    <div>
      <Hero img={hero} />

      <Tag>
        <h1>DISCOVER LUXURY ON THE COAST OF THE PACIFIC</h1>
        <h3>
          COME EXPERIENCE ASTONISHING VIEWS, ELEGANT DECOR, AND A SAFE RELAXING
          AMBIANCE THAT YOU’LL CALL HOME.
        </h3>
      </Tag>

      {features}
    </div>
  );
};

export default Home;
