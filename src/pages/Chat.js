import "../pages/style/Chat.css";
import React from "react";
import Search from "../components/Search.js";
import {
  FaArrowAltCircleLeft,
  FaEye,
  FaGithub,
  FaGrinTears,
  FaMicrophone,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";
import Image from "../assets/d.jpg";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

let minute = [
  12, 34, 54, 65, 76, 12, 45, 87, 65, 54, 43, 32, 21, 74, 53, 42, 75, 86, 97,
  53, 57,
];
function ran() {
  const int = Math.floor(Math.random() * minute.length);
  return minute[int];
}
// console.log(ran());

function Chat() {
  const [user, setUser] = useContext(UserContext);
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
              {user.map((users, index) => (
                <>
                  <Link className="chatArea" to="/chatting">
                    <div className="user">
                      <div className="profile">
                        <img
                          className="chatUserImg"
                          src={users.profileURL}
                          alt=""
                        />
                      </div>

                      <div className="nameLast">
                        <p className="userName">{users.username}</p>
                        <p className="seen">
                          <FaEye className="tool" />
                          <span className="tol">
                            {`${users.Repositories + ran()}`} Minutes
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="chatEnvironment">
          <div className="chatHeader">
            <div className="profileChatting">
              <div className="chatFlex">
                <img className="chatUserImg" src={Image} alt="" />
                <p>username</p>
              </div>
              <div className="chatLast">
                <p>Last Seen was...</p>
              </div>
            </div>

            <div className="more">
              <div className="codeSpaceProfile">
                <FaGithub className="chatUserImg" />
                <div className="green ava"></div>
              </div>
            </div>
          </div>
          <div className="chatBody">
            <div className="userSender">
              <h1 className="sender">Hey! How are you doing?</h1>
              <h1 className="sender">Hey! Are you ignoring me?</h1>
              <h1 className="sender">Hey! I'm here to give you money 😀</h1>
            </div>

            <div className="userReceiver">
              <h1 className="receiver">Hey! How are you doing?</h1>
              <h1 className="receiver">Hey! Are you ignoring me?</h1>
              <h1 className="receiver">Hey! I'm here to give you money 😀</h1>
            </div>
          </div>
          <div className="chatFooter">
            <div className="tolBox">
              <FaGrinTears className="chatFooterIcons" />
              <FaPaperclip className="chatFooterIcons" />
            </div>
            <div className="chatFooterInput">
              <input
                className="footerInput"
                type="text"
                name="text"
                placeholder="Type a message"
              />
            </div>
            <div className="speaker">
              <FaPaperPlane className="chatFooterIcons plane" />
              <FaMicrophone className="chatFooterIcons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
