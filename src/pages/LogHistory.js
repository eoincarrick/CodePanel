import "../pages/style/LogHistory.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function LogHistory() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="historyContainer"></div>
    </div>
  );
}

export default LogHistory;
