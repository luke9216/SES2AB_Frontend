import React from 'react';
import HomePage from "./HomePage"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export interface RoutingProps {

}

const Routing: React.SFC<RoutingProps> = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} render={() => <HomePage />} />
            </Switch>
        </Router>
    );
}

export default Routing;