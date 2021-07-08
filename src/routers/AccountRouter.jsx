import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AccountNav from "../components/elements/AccountNav";

export const AccountRouter = () => {
  return (
    <BrowserRouter>
      <div className="cont">
          <AccountNav />
      </div>
    </BrowserRouter>
  );
};
