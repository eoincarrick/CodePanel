import React from "react";
import Navbar from "../components/Navbar";
import "../House/style/Team.css";
import eoincarrick from "../assets/e.jpg";
import seniorbisamrk from "../assets/d.jpg";
import unknown from "../assets/a.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Team() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="teamContainer">
        <div className="profileOne">
          <div className="profileImg">
            <img className="teamProfile" src={seniorbisamrk} alt="" />
          </div>

          <div className="header4">
            <h4> Bismark Amanor</h4>
          </div>

          <div className="profileDescription">
            <p>
              Software Developer | Mobile App Developer | Web Developer | Skills
              - React Native, React, HTML, CSS, PHP, Firebase
            </p>
          </div>

          <div className="socialHandle">
            <div className="instagram">
              <FaInstagram />
            </div>
            <div className="twitter">
              <FaTwitter />
            </div>
            <div className="facebook">
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="profileOne">
          <div className="profileImg">
            <img className="teamProfile" src={eoincarrick} alt="" />
          </div>

          <div className="header4">
            <h4>Eoin Carrick</h4>
          </div>

          <div className="profileDescription">
            <p>
              I'm 22 years, I develop webs with ReactJS, CSS, HTML, JS, &
              Tailwind, Bootstrap. I really love what I do especially
              debugging😂. Knowledge: D3.js
            </p>
          </div>

          <div className="socialHandle">
            <div className="instagram">
              <FaInstagram />
            </div>
            <div className="twitter">
              <FaTwitter />
            </div>
            <div className="facebook">
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="profileOne">
          <div className="profileImg">
            <img className="teamProfile" src={unknown} alt="" />
          </div>

          <div className="header4">
            <h4>Unknown</h4>
          </div>

          <div className="profileDescription">
            <p>
              Someone else koraa😂. Who want their name here. Dm me quick. Ill
              be sharing on the internet, with your social handles connected, so
              you can get follow for free.
            </p>
          </div>

          <div className="socialHandle">
            <div className="instagram">
              <FaInstagram />
            </div>
            <div className="twitter">
              <FaTwitter />
            </div>
            <div className="facebook">
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
