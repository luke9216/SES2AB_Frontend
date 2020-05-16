import React, { FunctionComponent } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HamburgerRoutes } from "./../common/Hamburger/HamburgerRoutes";
import LoginPage from "./LoginPage"
import HomePage from "./Homepage/HomePage"
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
import ToolBox from "./ToolBox/ToolBox";
import MakeGate from "./makeGate/MakeGate";
import Resources from "./Resources/Resources";
import { Route } from "react-router-dom";
import { AssignmentRoutes } from './../containers/Assignment/AssignmentRoutes';

export interface RoutingProps { }


export const Routing: React.SFC<RoutingProps> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" render={() => <LoginPage />} />
            <HamburgerRoutes exact path="/home" screen={HomePage} />
            <HamburgerRoutes exact path="/discussionboard" screen={DiscussionBoard} />
            <HamburgerRoutes path="/assignments" screen={AssignmentRoutes} />
            <HamburgerRoutes exact path="/toolBox" screen={ToolBox} />
            <HamburgerRoutes exact path="/makeGate" screen={MakeGate} />
            <HamburgerRoutes exact path="/resources" screen={Resources} />
        </Switch>
    </BrowserRouter>
);

export default Routing;


