import "../pages/style/Chat.css";
import React from "react";
import Search from "../components/Search.js";
import { FaArrowAltCircleLeft, FaEye } from "react-icons/fa";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";
import Image from "../assets/d.jpg";

function Chat() {
  return (
    <div className="messageContainer">
      <div className="chatContainer">
        <div className="usersContainer">
          <div className="userInputHeader">
            <div className="chatTools">
              <div className="tools">
                <Link to="/Dashboard">
                  <FaArrowAltCircleLeft className="faTool" />
                </Link>
                <Profile className="tool" />
              </div>

              <div className="Search">
                <Search />
              </div>
            </div>

            <div className="userList">
              <Link className="chatArea" to="/chatting">
                <div className="user">
                  <div className="profile">
                    <img className="chatUserImg" src={Image} alt="" />
                  </div>

                  <div className="nameLast">
                    <p className="userName">Eoin Carrick</p>
                    <p className="seen">
                      <FaEye className="tool" />
                      <span className="tol">232 minutes</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
