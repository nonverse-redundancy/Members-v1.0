import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import user from "../../../api/user/user";
import calendar from "../../../scripts/calendar";
import LoaderBar from "../../elements/LoaderBar";
import VerifiedFloat from "../account/VerifiedFloat";
import AccountSecuredTile from "./AccountSecuredTile";
import NoServiceTile from "./NoServiceTile";

const WelcomeContainer = () => {
  document.title = "Nonverse | Home";

  const [load, setLoad] = useState(Math.floor(Math.random() * 100 + 5));
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(100);
      setTimeout(() => {
        setComplete(true);
      }, 1000);
    }, 1);
  });

  return (
    <div className="dashboard dash-welcome">
      <LoaderBar load={load} complete={complete}/>
      <div className="head">
        <h1>Welcome back {user.firstname}</h1>
        <VerifiedFloat />
      </div>
      <h2>Its {calendar.today("named-noyear")}</h2>
      <div className="summary">
        <NoServiceTile />
        <AccountSecuredTile />
      </div>
      <div className="whatsnew">
        {/* TODO Make "Whats New" section */}
      </div>
    </div>
  );
};

export default WelcomeContainer;
