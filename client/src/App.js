import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Favourite = lazy(() => import("./pages/favourite"));
const NotFound = lazy(() => import("./pages/not-found"));
const Settings = lazy(() => import("./pages/settings.js"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.FAVOURITE} component={Favourite} />
            <Route path={ROUTES.SETTINGS} component={Settings} />
            <Home />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
