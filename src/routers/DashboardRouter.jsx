import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/elements/Nav";
import SecureAuth from '../components/widgets/SecureAuth';

import WelcomeContainer from '../components/dashboards/WelcomeContainer';

export const DashboardRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
        <Nav />
        <div className="dashboard-cont">
          <Switch>
            <Route exact path="/" component={WelcomeContainer} />
          </Switch>
        </div>
        <SecureAuth />
      </div>
    </BrowserRouter>
  );
};