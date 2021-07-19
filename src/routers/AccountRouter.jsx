import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopNav from "../components/elements/TopNav";
import AccountNav from "../components/elements/AccountNav";
import SecureAuth from "../components/widgets/SecureAuth";

import ScreenBlock from "../components/elements/ScreenBlock";

import AccountContainer from "../components/dashboards/account/AccountContainer";
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
            <Route exact path="/account" component={AccountContainer} />
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
