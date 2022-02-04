import "../pages/style/Users.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import Search from "../components/Search";
import Profile from "../components/Profile";
import Punk from "../assets/f.jpg";
import { FaGithub, FaGitlab, FaStackOverflow, FaCodepen } from "react-icons/fa";

function Users({ username, profile }) {
  return (
    <>
      <Sidebar />
      <div className="historyContainer">
        <div className="components">
          <Search />
          <Profile />
        </div>
        <div className="usersInformation">
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
                <img className="imageProfile" src={profile} alt="punk" />
              </td>
              <td className="imgCodeSpace">
                <FaGithub className="faIcons" />
                <FaGitlab className="faIcons lab" />
                <FaStackOverflow className="faIcons lab" />
                <FaCodepen className="faIcons" />
              </td>
              <td className="country">Germany</td>
              <td className="views">12K</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
