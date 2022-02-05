import "../pages/style/Dashboard.css";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar.js";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Profile from "../components/Profile";
import ReactApexChart from "react-apexcharts";

function Dashboard() {
  const [state, setState] = useState({
    series: [
      {
        name: "GitHub",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "GitLab",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "BitBucket",
        data: [43, 65, 45, 12, 4, 2, 1],
      },
      {
        name: "CodePen",
        data: [16, 2, 49, 32, 34, 100, 99],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

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
              <Link className="links" to="/Profile">
                Repositories
              </Link>
              <Link className="links" to="/Profile">
                Fork
              </Link>
              <Link className="links" to="/Profile">
                Connected Account
              </Link>
            </div>
          </div>
        </div>

        <div className="workSpace">
          <div className="wholeChart">
            <div className="setLocation">
              <div id="chart">
                <ReactApexChart
                  options={state.options}
                  series={state.series}
                  type="area"
                  height={350}
                />
              </div>
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
