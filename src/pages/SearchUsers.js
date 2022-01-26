import "../pages/style/SearchUsers.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function SearchUsers() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="historyContainer"></div>
    </div>
  );
}

export default SearchUsers;
