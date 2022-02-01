import "../pages/style/Dashboard.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Profile from "../components/Profile";

function Dashboard() {
  return (
    <div className="dashBoard">
      <Sidebar />
      <div className="main">
        <div className="subMain">
          <div className="navbar">
            <Search />
            <Profile />
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
          <div className="wholeChart">
            <div className="setLocation">
              <div className="chart"></div>

              <div className="chartExplained"></div>
            </div>

            <div className="averageRate"></div>

            <div className="overWeeks"></div>
          </div>

          <div className="conversion">
            <div className="headerFour">
              <h4></h4>
            </div>

            <div className="para">
              <p></p>
            </div>

            <div className="peakAndCall"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
