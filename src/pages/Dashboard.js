import "../pages/style/Dashboard.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import profile from "../assets/profile.jpg";
import { FaSearch, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashBoard">
      <Sidebar />
      <div className="main">
        <div className="subMain">
          <div className="navbar">
            <div className="input">
              <input
                className="searchInput"
                type="search"
                placeholder="Search"
              />
              <FaSearch className="icon" />
            </div>

            <div className="profile">
              <Link to="/Profile">
                <img className="imgProfile" src={profile} alt="" />
              </Link>
            </div>
          </div>

          <div className="contentAndNavbar">
            <div className="headerOne">
              <h1>Welcome</h1>
              <p>Dear user, it is now to explore the whole dashboard.</p>
            </div>

            <div className="navbar">
              <Link>Business Account</Link>
              <Link> Revenue</Link>
              <Link>Expenses</Link>
              <Link>
                <FaEllipsisH />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
