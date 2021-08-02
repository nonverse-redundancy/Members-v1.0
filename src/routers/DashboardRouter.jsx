import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/elements/Nav";
import TopNav from "../components/elements/TopNav";
import SecureAuth from "../components/widgets/SecureAuth";

import ScreenBlock from "../components/elements/ScreenBlock";

import WelcomeContainer from "../components/dashboards/welcome/WelcomeContainer";
import AccountButton from "../components/buttons/AccountButton";

export const DashboardRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
        <Nav />
        <div className="dashboard-cont">
          <TopNav>
            <AccountButton />
          </TopNav>
          <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <Route
              path="*"
              render={(props) => <ScreenBlock {...props} code={404} />}
            />
          </Switch>
        </div>
        <SecureAuth />
      </div>
    </BrowserRouter>
  );
};
