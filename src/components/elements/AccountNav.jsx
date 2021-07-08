// React
import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

import nvlogo from "../../assets/svg/nvlogo-dark.svg";
import auth from "../../api/auth/auth";

const AccountNav = () => {
  const history = useHistory();

  return (
    <div className="nav-cont">
      <div className="nav account-nav">
        <img src={nvlogo} alt="Nonverse-Logo" className="logo" />
        <div className="pg-link">
          <NavLink exact to="/account" activeClassName="active">
            Account
          </NavLink>
          <NavLink to="/account/services" activeClassName="active">
            Services
          </NavLink>
          <NavLink to="/account/subscriptions" activeClassName="active">
            Subscriptions
          </NavLink>
          <NavLink to="/account/payments" activeClassName="active">
            Payments
          </NavLink>
          <NavLink to="/support" activeClassName="active">
            Support
          </NavLink>
        </div>
        <a className="logout" onClick={() => {auth.logout()}}>Logout</a>
      </div>
    </div>
  );
};

export default AccountNav;
