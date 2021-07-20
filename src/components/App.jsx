// React
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import { ViewRouter } from "./routers/ViewRouter";

// Auth
import auth from "../api/auth/auth";
import user from "../api/user/user";

// Styles
import "../sass/app.scss";

// Components
import Loader from "./elements/Loader";
import { DashboardRouter } from "../routers/DashboardRouter";
import { AccountRouter } from "../routers/AccountRouter";
import recovery from "../api/user/recovery";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appIsDevelop, setAppIsDevelop] = useState(false);

  useEffect(() => {
    async function authenticate() {
      await auth.check();
      if (auth.authenticated) {
        await user.get();
        await recovery.get();
        setIsAuthenticated(true);
      } else {
        if (auth.connected) {
          auth.login();
        }
      }
    }
    authenticate();
    if (process.env.REACT_APP_DEPLOYMENT !== 'production') {
      setAppIsDevelop(true);
    }
  }, []);

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/account" component={AccountRouter} />
          <Route path="/" component={DashboardRouter}/>
        </Switch>
        <h1 className="app-status">{appIsDevelop ? 'You are using this app in a development environment' : ''}</h1>
      </BrowserRouter>
    );
  } else {
    return <Loader />;
  }
}

export default App;
