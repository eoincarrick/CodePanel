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
              <p>
                Dear user, it is now time to explore the your working space.
              </p>
            </div>

            <div className="subNavbar">
              <Link className="links" to="/BusinessAccount">
                Business Account
              </Link>
              <Link className="links" to="/Revenue">
                Revenue
              </Link>
              <Link className="links" to="/Expenses">
                Expenses
              </Link>
              <FaEllipsisH />
            </div>
          </div>
        </div>

        <div className="workSpace"></div>
      </div>
    </div>
  );
}

export default Dashboard;
