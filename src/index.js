import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import {HashRouter} from "react-router-dom";

// const url = 'http://localhost:3001/'
// fetch(`${url}contacts`)
//   .then((response) => response.json())
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App/>
  </HashRouter>
);
