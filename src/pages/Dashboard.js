import "../pages/style/Dashboard.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function Dashboard() {
  return (
    <div className="dashBoard">
      <div className="otherDiv">
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
