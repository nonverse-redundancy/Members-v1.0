import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomeContainer from "../components/dashboards/WelcomeContainer";

import AccountNav from "../components/elements/AccountNav";
import Loader from "../components/elements/Loader";

import TopNav from "../components/elements/TopNav";

import HomeButton from "../components/buttons/HomeButton";

export const AccountRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
          <AccountNav />
          <div className="account-cont">
              <TopNav>
                  <HomeButton />
              </TopNav>
              <Switch>
                  <Route path="*" component={Loader} />
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
};
