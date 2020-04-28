<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
=======
import HomePage from "./HomePage"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
>>>>>>> Set up inital home page and project structure
=======
import React from "react";
import HomePage from "./HomePage";
import ToolBox from "./ToolBox/ToolBox";
import Assignment from "./Assignments/Assignment";
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
>>>>>>> hello hello

export interface RoutingProps {}

const Routing: React.SFC<RoutingProps> = () => {
<<<<<<< HEAD
    return (
        <Router>
            <Switch>
<<<<<<< HEAD
                <Route path="/" exact={true} render={(props: any) => <HomePage props={props} />} />
                <Route path="/login" render={(props: any) => <LoginPage props={props} />} />
=======
                <Route path="/" exact={true} render={() => <HomePage />} />
>>>>>>> Set up inital home page and project structure
            </Switch>
        </Router>
    );
}
=======
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
      </Switch>
    </Router>
  );
};
>>>>>>> hello hello

export default Routing;
