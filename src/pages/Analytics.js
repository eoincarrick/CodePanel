import "../pages/style/Analytics.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function Analytics() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="analyticContainer"></div>
    </div>
  );
}

export default Analytics;
