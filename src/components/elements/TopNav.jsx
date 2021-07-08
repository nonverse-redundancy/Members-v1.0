import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Buttons

const TopNav = ({ children }) => {
  return (
    <div className="topnav">
      <div className="buttons">{children}</div>
    </div>
  );
};

export default TopNav;
