import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Theme from "./Theme/Theme";
import { GlobalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Components/RoomContext";
import { FeatureProvider } from "./Components/FeatureContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RoomProvider>
        <FeatureProvider>
          <GlobalStyles />
          <Router>
            <App />
          </Router>
        </FeatureProvider>
      </RoomProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
