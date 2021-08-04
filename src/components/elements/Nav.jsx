// React
import React from "react";
import { NavLink } from "react-router-dom";

import nvlogo from "../../assets/svg/nvlogo.svg";

// Components

const SidePanel = () => {

  return (
    <div className="nav-cont">
      <div className="nav dash-nav">
        <img src={nvlogo} alt="Nonverse-Logo" className="logo" />
        <div className="pg-link">
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink to="/admin" activeClassName="active" className="nav-link">
            <i className="fas fa-shield-alt"></i>
          </NavLink>
          <NavLink to="/mail" activeClassName="active" className="nav-link">
            <i className="fas fa-envelope"></i>
          </NavLink>
          <NavLink to="/todo" activeClassName="active" className="nav-link">
            <i className="fas fa-check"></i>
          </NavLink>
        </div>
        <i className="nav-link fas fa-cog" id="settings"></i>
      </div>
    </div>
  );
};

export default SidePanel;
