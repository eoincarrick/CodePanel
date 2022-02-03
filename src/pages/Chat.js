import "../pages/style/Chat.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import { FaExchangeAlt } from "react-icons/fa";
import Profile from "../components/Profile";

function Chat() {
  return (
    <div className="messageContainer">
      <div className="chatContainer">
        <div className="usersContainer">
          <div className="userInputHeader">
            <div className="chatTools">
              <ul className="tools">
                <FaExchangeAlt className="tool faTool" />
                <Profile className="tool" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
