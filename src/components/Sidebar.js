import "../components/style/Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFolder,
  FaCode,
  FaInbox,
  FaHistory,
  FaUserAlt,
  FaSignOutAlt,
  FaChartLine,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="logoContainer">
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </div>

      <div className="sideList">
        <Link className="link" to="/Dashboard">
          <FaFolder className="icons" /> Dashboard
        </Link>
        <Link className="link" to="/Users">
          <FaCode className="icons" />
          Users
        </Link>
        <Link className="link" to="/Chat">
          <FaInbox className="icons" /> Chat
        </Link>
        <Link className="link" to="/Log_History">
          <FaHistory className="icons" />
          Log History
        </Link>
        <Link className="link" to="/Analytics">
          <FaChartLine className="icons" /> Analytics
        </Link>
        <Link className="link" to="/Profile">
          <FaUserAlt className="icons" /> Profile
        </Link>
      </div>

      <div className="logContainer">
        <mdiViewDashboard />
        <Link className="link" to="/">
          <FaSignOutAlt className="icons" /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
