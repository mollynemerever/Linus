import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      {" "}
      <h2>Settings</h2>
      <span className="navigation-profile">Profile > </span>
      <span className="navigation-current"> Settings </span>
      <span class="fas fa-user" />
    </div>
  );
};

export default Header;
