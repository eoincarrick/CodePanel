import "../components/style/Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { mdiViewDashboard } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="logoContainer">
        <span></span>
        <div>Logo</div>
      </div>

      <div className="sideList">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Search_Users">Search Users</Link>
        <Link to="/Call_Monitor">Call Monitor</Link>
        <Link to="/History">History</Link>
        <Link to="/Leads">Leads</Link>
        <Link to="/Profile">Profile</Link>
      </div>

      <div className="logContainer">
        <mdiViewDashboard /> <Link to="/Logout">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
