import React from "react";

import user from "../../../api/user/user";
import calendar from "../../../scripts/calendar";
import VerifiedFloat from "../account/VerifiedFloat";
import NoServiceTile from "./NoServiceTile";

const WelcomeContainer = () => {
  document.title = "Nonverse | Home";

  return (
    <div className="dashboard dash-welcome">
      <div className="head">
        <h1>Welcome back {user.firstname}</h1>
        <VerifiedFloat />
      </div>
      <h2>Its {calendar.today("named-noyear")}</h2>
      <div className="summary">
        <NoServiceTile />
      </div>
    </div>
  );
};

export default WelcomeContainer;
