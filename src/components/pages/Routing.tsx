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
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> hello hello
=======
import Hamburger from "./../common/Hamburger/Hamburger";
>>>>>>> AAAAAAAAAAAAH
=======
>>>>>>> Update: beginning merge

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
          path="/discuss"
          exact={true}
          render={(props: any) => <DiscussionBoard />}
        />
      </Switch>
    </Router>
  );
};
>>>>>>> hello hello

export default Routing;
