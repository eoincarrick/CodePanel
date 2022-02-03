import React from "react";
import { FaGithub, FaGitlab, FaStackOverflow } from "react-icons/fa";
import Punk from "../assets/c.jpg";
import "./style/User.css";

function User() {
  return (
    <div className="userContainer">
      <td className="username">eoincarrick</td>
      <td className="proImg">
        <img className="imageProfile" src={Punk} alt="" />
      </td>
      <td className="imgCodeSpace">
        <FaGithub className="faIcons" />
        <FaGitlab className="faIcons lab" />
        <FaStackOverflow className="faIcons lab" />
      </td>
      <td className="country">Germany</td>
      <td className="views">12K</td>
    </div>
  );
}

export default User;
