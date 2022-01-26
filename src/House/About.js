import React from "react";
import Navbar from "../components/Navbar";
import { FaEye } from "react-icons/fa";

function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="AboutContainer">
        <div className="leftSide">
          <div className="headerOne">
            <h1>About Our Code Panel</h1>
          </div>
          <div className="para">
            We help developers like you #track, #manage, and with our additional
            #analytic tool to #Monitor your followers, on GitHub, GitLab,
            BitBucket, CodePen, and other developer space on only one account.
            And we give you power to message or reply from this account to the
            connected account safely. We hope to make things easy for you.
          </div>
        </div>
        <div className="rightSide">
          <div className="headerThree">
            <h3>What You Can Do</h3>
          </div>
          <div className="paraContainer">
            <div className="paraOne">
              <FaEye />
              <p>
                View the number of times, a follower or a unfollower has viewed
                any of your code, visited your profile account, forked, and
                more.
              </p>
            </div>
            <div className="paraTwo"></div>
            <div className="paraThree"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
