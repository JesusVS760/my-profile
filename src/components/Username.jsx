import React from "react";
import "./Username.css";

const Username = ({ userData }) => {
  return (
    <div className="username-container">
      <button className="button-30" role="button">
        {userData?.username}
      </button>
    </div>
  );
};

export default Username;
