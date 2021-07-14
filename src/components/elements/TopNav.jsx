import React from "react";

//Buttons

const TopNav = ({ children }) => {
  return (
    <div className="topnav">
      <div className="buttons">{children}</div>
    </div>
  );
};

export default TopNav;
