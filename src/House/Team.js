import React from "react";
import Navbar from "../components/Navbar";
import "../House/style/Team.css";

function Team() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="teamContainer">
        <div className="profileOne">
          <div className="profileImg">
            <img src="" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default Team;
