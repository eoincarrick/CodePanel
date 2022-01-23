import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";

const root = document.querySelector("#adminPanel");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
