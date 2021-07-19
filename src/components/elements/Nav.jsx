// React
import React from "react";
import { useHistory } from "react-router-dom";

import nvlogo from "../../assets/svg/nvlogo.svg";

// Components

const SidePanel = () => {

  const history = useHistory();

  return (
    <div className="nav-cont">
      <div className="nav dash-nav">
        <img src={nvlogo} alt="Nonverse-Logo" className="logo" />
        <div className="pg-link">
          <i className="nav-link fas fa-home" id="home" onClick={() => history.push("/")}></i>
          <i className="nav-link fas fa-shield-alt" id="admin"></i>
          <i className="nav-link fas fa-envelope" id="messages"></i>
          <i className="nav-link fas fa-check" id="todo"></i>
        </div>
        <i className="nav-link fas fa-cog" id="settings"></i>
      </div>
    </div>
  );
};

export default SidePanel;
