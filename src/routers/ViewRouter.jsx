import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SidePanel from "../components/elements/SidePanel";

import AccountPanel from "../components/panels/AccountPanel";

export const ViewRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
        <SidePanel />
        <div className="panel-cont">
          <Switch>
            <Route exact path="/account" component={AccountPanel} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
