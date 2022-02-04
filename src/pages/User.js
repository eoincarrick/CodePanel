import React from "react";
import Users from "./Users";
import Data from "../Data/Data.json";
import "./style/User.css";

function User() {
  return (
    <>
      {Data.map((user) => (
        <Users
          key={user.id}
          username={user.username}
          profile={user.profileURL}
          gitHub={user.codeSpace.GitHub}
          gitBucket={user.codeSpace.GitBucket}
          gitLab={user.codeSpace.GitLab}
          codePen={user.codeSpace.CodePen}
          views={user.Repositories}
        />
      ))}
    </>
  );
}

export default User;
