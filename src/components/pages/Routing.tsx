import React from "react";
import HomePage from "./HomePage";
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
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
          path="/discuss"
          exact={true}
          render={(props: any) => <DiscussionBoard />}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
