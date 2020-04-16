import React from "react";
import HomePage from "./HomePage";
import ToolBox from "./ToolBox/ToolBox";
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
          path="/toolbox"
          exact={true}
          render={(props: any) => <ToolBox props={props} />}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
