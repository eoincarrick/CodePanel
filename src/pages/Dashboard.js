import "../pages/style/Dashboard.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import profile from "../assets/profile.jpg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import PolarAreaChart from "../charts/PolarAreaChart";

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
            </div>
          </div>
        </div>

        <div className="workSpace">
          {/* <div className="wholeChart">
            <div className="setLocation">
              <div className="chart"></div>

              <div className="chartExplained"></div>
            </div>

            <div className="averageRate"></div>

            <div className="overWeeks"></div>
          </div> */}

          <PolarAreaChart />

          {/* <div className="conversion">
            <div className="headerFour">
              <h4></h4>
            </div>

            <div className="para">
              <p></p>
            </div>

            <div className="peakAndCall"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
