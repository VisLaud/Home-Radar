import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./pages/PrivateRoute";

import * as ROUTES from "./constants/routes";
import HomePage from "./HomePage/Pages/HomePage";

//const HomePage = lazy(() => import("./HomePage/Pages/index"));
const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Favourite = lazy(() => import("./pages/favourite"));
const NotFound = lazy(() => import("./pages/not-found"));
const Settings = lazy(() => import("./pages/settings.js"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const SinLog = lazy(() => import("./pages/sinlog/Sinlog"));

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.SIGN_UP} component={SignUp} />
              <Route path={ROUTES.SIN_LOG} component={SinLog} />
              <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
              <PrivateRoute path={ROUTES.FAVOURITE} component={Favourite} />
              <PrivateRoute path={ROUTES.SETTINGS} component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
