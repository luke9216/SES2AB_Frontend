import React from "react";
import HomePage from "./HomePage";
import Assignment from "./Assignments/Assignment";
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
          path="/assignment"
          exact={true}
          render={(props: any) => <Assignment />}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
