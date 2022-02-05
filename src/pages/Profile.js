import "../pages/style/Profile.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import Punk from "../assets/e.jpg";
import {
  FaCodepen,
  FaDotCircle,
  FaGithub,
  FaGitlab,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

function Profile() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="profileContainer">
        <div className="mainProfileContainer">
          <div className="pContainer">
            <div className="proContainer">
              <img className="mainProfileImg" src={Punk} alt="" />
              <p>EDIT PROFILE</p>
            </div>
            <div className="profileInfo">
              <p className="namePro">Eoin Carrick</p>
              <p className="usernameProfile">
                <span className="userProfile">@eoincarrick</span>
                <span className="ex">
                  <FaDotCircle />
                  codepanel
                </span>
              </p>
              <p className="locationProfile">Community 18, Accra, Ghana</p>
              <p className="profileIcon">
                <li className="pIcon">
                  <FaGithub className="followIcon" />
                </li>
                <li className="pIcon">
                  <FaStackOverflow className="followIcon" />
                </li>
                <li className="pIcon">
                  <FaGitlab className="followIcon" />
                </li>
                <li className="pIcon">
                  <FaTwitter className="followIcon" />
                </li>
                <li className="pIcon">
                  <FaCodepen className="followIcon" />
                </li>
                <li className="pIcon">
                  <FaGithub className="followIcon" />
                </li>
              </p>
            </div>
            <div className="bioProfile">
              <h3>Bio</h3>
              <p>
                I'm 22 years, I develop webs with ReactJS, CSS, HTML, JS, &
                Tailwind, Bootstrap. I really love what I do especially
                debugging😂. Knowledge: D3.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
