import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/elements/Nav";

import AccountPanel from "../components/panels/AccountPanel";

export const ViewRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
        <Nav />
        <div className="panel-cont">
          <Switch>
            <Route exact path="/account" component={AccountPanel} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
