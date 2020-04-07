import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
=======
import HomePage from "./HomePage"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
>>>>>>> Set up inital home page and project structure

export interface RoutingProps {

}

const Routing: React.SFC<RoutingProps> = () => {
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

export default Routing;