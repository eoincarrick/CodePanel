import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = document.querySelector("#adminPanel");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);
