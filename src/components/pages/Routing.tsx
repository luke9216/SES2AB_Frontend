import React from "react";
import HomePage from "./HomePage";
import Auth from "./Auth/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export interface RoutingProps {}

const Routing: React.SFC<RoutingProps> = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props: any) => <HomePage props={props} />}
        />
        <Route
          path="/login"
          exact={true}
          render={(props: any) => <Auth props={props} />}
        />
        />
      </Switch>
    </Router>
  );
};

export default Routing;
