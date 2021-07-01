import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/elements/Nav";
import SecureAuth from '../components/widgets/SecureAuth';

import Panel from "../components/panels/Panel";

export const ViewRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
        <Nav />
        <div className="panel-cont">
          <Switch>
            <Route exact path="/account" component={Panel} />
          </Switch>
        </div>
        <SecureAuth />
      </div>
    </BrowserRouter>
  );
};
