import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MakeGate from "./makeGate/MakeGate";

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
          path="/makegate"
          exact={true}
          render={(props: any) => <MakeGate props={props} />}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
