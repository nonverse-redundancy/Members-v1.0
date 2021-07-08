import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/elements/Nav";
import TopNav from "../components/elements/TopNav";
import SecureAuth from "../components/widgets/SecureAuth";

import Loader from "../components/elements/Loader";

import WelcomeContainer from "../components/dashboards/WelcomeContainer";
import AccountButton from "../components/buttons/AccountButton";

export const DashboardRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
        <Nav />
        <div className="dashboard-cont">
          <TopNav>
            <AccountButton/>
          </TopNav>
          <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <Route path="*" component={Loader} />
          </Switch>
        </div>
        <SecureAuth />
      </div>
    </BrowserRouter>
  );
};
