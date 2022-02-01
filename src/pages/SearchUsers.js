import "../pages/style/SearchUsers.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import Search from "../components/Search";
import Profile from "../components/Profile";
import Punk from "../assets/a.jpg";
import { FaGithub, FaGitlab, FaStackOverflow } from "react-icons/fa";

function SearchUsers({ key, space, username}) {
  console.log(space)
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="historyContainer">
        <div className="components">
          <Search />
          <Profile />
        </div>

        <div className="usersInformation">
          <center className="informationHeader">
            <li className="list l">Name</li>
            <li className="list l">Profiles</li>
            <li className="list l">Country</li>
            <li className="list l">Repositories</li>
          </center>

          <div className="users">
            <li className="list lName">{username}</li>
            <li className="list lProfile">
              <img className="imageProfile" src={Punk} alt="" />
              <span>{space}</span>
              <FaGitlab className="faIcons lab" />
              <FaStackOverflow className="faIcons lab" />
            </li>
            <li className="list lCountry">GH</li>
            <li className="list lFollow">12K</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchUsers;
