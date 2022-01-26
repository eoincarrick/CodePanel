import "../pages/style/CallMonitor.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function CallMonitor() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="messageContainer"></div>
    </div>
  );
}

export default CallMonitor;
