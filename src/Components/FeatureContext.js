import React, { useState, useEffect, createContext } from "react";
import { getFeatures } from "../Contentful";

export const FeatureContext = createContext();

export const FeatureProvider = (props) => {
  const [features, setFeatures] = useState({
    home: [],
    stay: [],
    dine: [],
    experience: [],
  });

  useEffect(() => {
    getFeatures().then((res) => {
      const home = res.reduce(
        (acc, ele) =>
          ele.fields.type.includes("Home")
            ? acc.concat({ fields: ele.fields, sys: ele.sys })
            : acc,
        []
      );
      const stay = res.reduce(
        (acc, ele) =>
          ele.fields.type.includes("Stay")
            ? acc.concat({ fields: ele.fields, sys: ele.sys })
            : acc,
        []
      );
      const dine = res.reduce(
        (acc, ele) =>
          ele.fields.type.includes("Dine")
            ? acc.concat({ fields: ele.fields, sys: ele.sys })
            : acc,
        []
      );
      const exp = res.reduce(
        (acc, ele) =>
          ele.fields.type.includes("Experience")
            ? acc.concat({ fields: ele.fields, sys: ele.sys })
            : acc,
        []
      );
      setFeatures({
        home: home,
        stay: stay,
        dine: dine,
        experience: exp,
      });
    });
  }, []);

  return (
    <FeatureContext.Provider
      value={{
        features,
      }}
    >
      {props.children}
    </FeatureContext.Provider>
  );
};
