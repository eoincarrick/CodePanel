import React from "react";
import "./style/Profile.css";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="profile">
        <Link to="/Profile">
          <img className="imgProfile" src={profile} alt="" />
        </Link>
      </div>
    </>
  );
}

export default Profile;
