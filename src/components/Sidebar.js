import "../components/style/Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFolder,
  FaSearch,
  FaPhoneAlt,
  FaHistory,
  FaStar,
  FaUserAlt,
  FaSignOutAlt,
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
        <Link className="link" to="/Search_Users">
          <FaSearch className="icons" /> Search Users
        </Link>
        <Link className="link" to="/Call_Monitor">
          <FaPhoneAlt className="icons" /> Call Monitor
        </Link>
        <Link className="link" to="/History">
          <FaHistory className="icons" /> History
        </Link>
        <Link className="link" to="/Leads">
          <FaStar className="icons" /> Leads
        </Link>
        <Link className="link" to="/Profile">
          <FaUserAlt className="icons" /> Profile
        </Link>
      </div>

      <div className="logContainer">
        <mdiViewDashboard />
        <Link className="link" to="/Logout">
          <FaSignOutAlt className="icons" /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
