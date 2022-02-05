import "../pages/style/LogHistory.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function LogHistory() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="historyContainer">
        <div className="mainLogHistory">
          <div className="logHistory">
            <h3>Log History</h3>
            {user.map((users, index) => (
              <div className="logList">
                <li className="listLogs">
                  <img className="logImg" src={`${users.logIcon.key}`} alt="" />
                </li>
                <li className="listLogs">
                  {`${users.username} changed the password for this account.`}
                </li>
                <li className="listLogs">
                  <img className="punkImg" src={users.profileURL} alt="" />
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogHistory;
