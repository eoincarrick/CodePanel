import React from "react";
import Navbar from "../components/Navbar";
import "../pages/style/home.css";
import HomeImage from "../assets/home.svg";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="homeContainer">
        <div className="h1Header">
          <h1>
            It is all
            <br />
            <span className="color">Connected</span>
          </h1>

          <p className="headerPara">
            A place where developers can reply, push, commit, export, clone,
            fork easily into any account like GitHub, GitLab, BitBucket,
            CodePen, CodeSandbox, and other, right from here, CodePanel.
          </p>

          <Link to="/Dashboard">
            <div className="btn">
              <button className="btnJoin">
                <FaThumbsUp />
                Join us
              </button>
            </div>
          </Link>
        </div>

        <div className="homeImg">
          <img className="imgHome" src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
