import React from "react";
import HomePage from "./HomePage";
import MakeGate from "./makeGate/MakeGate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

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
