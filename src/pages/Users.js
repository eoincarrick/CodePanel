import "../pages/style/Users.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import Search from "../components/Search";
import Profile from "../components/Profile";
import User from "./User";

function Users({
  username,
  profile,
  gitHub,
  gitBucket,
  gitLab,
  codePen,
  views,
}) {
  return (
    <>
      <div>
        <Sidebar />
        <User />
      </div>
      <div className="historyContainer">
        <div className="components">
          <Search />
          <Profile />
        </div>

        <div className="usersInformation">
          {/* <div className="spanTitle">
            <span className="spanList">Username</span>
            <span className="spanList">Profile</span>
            <span className="spanList">CodeSpace</span>
            <span className="spanList">Country</span>
            <span className="spanList">Code View</span>
          </div> */}

          <table>
            <tr className="mainTableHeader">
              <th className="tableHeader">Username</th>
              <th className="tableHeader">Profile</th>
              <th className="tableHeader">CodeSpace</th>
              <th className="tableHeader">Country</th>
              <th className="tableHeader">Code Views</th>
            </tr>
            <tr className="underLine">
              <td className="username">{username}</td>
              <td className="proImg">
                <img className="imageProfile" src={profile} alt="" />
              </td>
              <td className="imgCodeSpace">
                <img src={gitHub} alt="" />
                <img src={gitLab} alt="" />
                <img src={codePen} alt="" />
                <img src={gitBucket} alt="" />
              </td>
              <td className="country">Germany</td>
              <td className="views">{views}</td>
            </tr>
          </table>

          {/* <div className="users">
            <li className="list lName">Carrick Eoin</li>
            <li className="list lProfile">
              <img className="imageProfile" src={Punk} alt="" />
              <span>{space}</span>
              <FaGitlab className="faIcons lab" />
              <FaStackOverflow className="faIcons lab" />
            </li>
            <li className="list lCountry">GH</li>
            <li className="list lFollow">12K</li>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Users;
