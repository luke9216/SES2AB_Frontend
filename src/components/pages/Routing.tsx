import React from "react";
import HomePage from "./HomePage";
import ToolBox from "./ToolBox/ToolBox";
import Assignment from "./Assignments/Assignment";
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hamburger from "./../common/Hamburger/Hamburger";

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
        <Route
          path="/discuss"
          exact={true}
          render={(props: any) => <DiscussionBoard />}
        />
        <Route
          path="/assignment"
          exact={true}
          render={(props: any) => <Assignment />}
        />
        <Route
          path="/drawer"
          exact={true}
          render={(props: any) => <Hamburger />}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
