// React
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import { ViewRouter } from "./routers/ViewRouter";

// Auth
import auth from "../api/auth/auth";

// Styles
import "../sass/app.scss";

// Components
import Loader from "./elements/Loader";
import { DashboardRouter } from "../routers/DashboardRouter";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(async () => {
    await auth.check();
    if (auth.authenticated) {
      setIsAuthenticated(true);
    } else {
      if (auth.connected) {
        auth.login();
      }
    }
  });

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DashboardRouter}/>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Loader />;
  }
}

export default App;
