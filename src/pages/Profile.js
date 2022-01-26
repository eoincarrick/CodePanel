import "../pages/style/Profile.css";
import React from "react";
import Sidebar from "../components/Sidebar.js";

function Profile() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="profileContainer"></div>
    </div>
  );
}

export default Profile;
