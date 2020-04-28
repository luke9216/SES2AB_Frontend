import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

export interface RoutingProps {

}

const Routing: React.SFC<RoutingProps> = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} render={(props: any) => <HomePage props={props} />} />
                <Route path="/login" render={(props: any) => <LoginPage props={props} />} />
            </Switch>
        </Router>
    );
}

export default Routing;