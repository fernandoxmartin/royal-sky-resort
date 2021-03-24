import React, { useState, useContext } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Stay from "./Pages/Stay";
import Room from "./Pages/Room";
import Dine from "./Pages/Dine";
import Experience from "./Pages/Experience";
import Reserve from "./Pages/Reserve";
import { Rooms } from "./Pages/Rooms";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import { FeatureContext } from "./Components/FeatureContext";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const context = useContext(FeatureContext);
  const { home, stay, dine, experience } = context.features;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Nav isOpen={isOpen} setOpen={setOpen} />
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Switch>
        <Route path="/" exact component={() => <Home items={home} />} />
        <Route path="/stay" exact component={() => <Stay items={stay} />} />
        <Route path="/stay/:type/:slug" component={Room} />
        <Route path="/dine" exact component={() => <Dine items={dine} />} />
        <Route
          path="/experience"
          exact
          component={() => <Experience items={experience} />}
        />
        <Route path="/reserve" exact component={() => <Reserve />} />
        <Route path="/reserve/rooms" exact component={() => <Rooms />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
