// React
import React from "react";
import { useHistory } from "react-router-dom";
import auth from "../../api/auth/auth";

import nvlogo from "../../assets/svg/nvlogo.svg";
// Components
import LogoutBtn from "../buttons/LogoutBtn";

const SidePanel = () => {
  //

  const history = useHistory();

  return (
    <div className="nav-cont">
      <div className="nav">
        <img src={nvlogo} className="logo" />
        <div className="pg-link">
          <i className="nav-link fas fa-home" id="home"></i>
          <i className="nav-link fas fa-shield-alt" id="admin"></i>
          <i className="nav-link fas fa-envelope" id="messages"></i>
          <i className="nav-link fas fa-check" id="todo"></i>
        </div>
        <i className="nav-link fas fa-cog" id="settings" onClick={() => {
          auth.logout() //NOTE This is a temporary logout button and should be removed
        }}></i>
      </div>
    </div>
  );
};

export default SidePanel;
