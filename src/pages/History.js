import "../pages/style/History.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function History() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="historyContainer"></div>
    </div>
  );
}

export default History;
