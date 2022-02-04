import "../pages/style/Users.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import Search from "../components/Search";
import Profile from "../components/Profile";
// import Punk from "../assets/f.jpg";
// import { FaGithub, FaGitlab, FaStackOverflow, FaCodepen } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

// <FaGithub className="usersProImg" />
//           <FaGitlab className="usersProImg lab" />
//           <FaStackOverflow className="usersProImg lab" />
//           <FaCodepen className="usersProImg" />

function Users() {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <Sidebar />
      <div className="historyContainer">
        <div className="components">
          <Search />
          <Profile />
        </div>
        <div className="usersInformation">
          <div className="title">
            <li className="titleList">Username</li>
            <li className="titleList">Profile</li>
            <li className="titleList">codeSpace</li>
            <li className="titleList">Views</li>
          </div>
          {user.map((users) => (
            <>
              <div className="userTitle">
                <li className="userTitleList width">{users.username}</li>
                <li className="userTitleList ">
                  <img className="usersProImg" src={users.profileURL} alt="" />
                </li>
                <li className="userTitleList">
                  <img
                    className="usersProImg"
                    src={users.codeSpace.GitHub}
                    alt=""
                  />
                  <img
                    className="usersProImg"
                    src={users.codeSpace.GitLab}
                    alt=""
                  />
                  <img
                    className="usersProImg"
                    src={users.codeSpace.GitBucket}
                    alt=""
                  />
                  <img
                    className="usersProImg"
                    src={users.codeSpace.CodePen}
                    alt=""
                  />
                </li>
                <li className="userTitleList">{`${users.Repositories}K`}</li>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Users;
