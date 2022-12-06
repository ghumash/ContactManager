import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import ThemeContext from "./context/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext.Provider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeContext.Provider>
);
