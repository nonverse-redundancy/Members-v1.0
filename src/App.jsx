// React
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import { ViewRouter } from "./routers/ViewRouter";

// Auth
import auth from "./api/auth/auth";

// Styles
import "./sass/app.scss";

// Components
import Loader from "./components/Loader";
import LogoutBtn from './components/buttons/LogoutBtn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(async () => {
    await auth.check();
    if (auth.authenticated) {
      setIsAuthenticated(true);
    } else {
      auth.login();
    }
  });

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LogoutBtn}/>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Loader />;
  }
}

export default App;
