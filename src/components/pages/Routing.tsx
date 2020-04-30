import React, { FunctionComponent } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HamburgerRoutes } from "./../common/Hamburger/HamburgerRoutes";
import HomePage from "./HomePage";
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
import Assignment from "./Assignments/Assignment";
import ToolBox from "./ToolBox/ToolBox";
import MakeGate from "./makeGate/MakeGate";

export interface RoutingProps {}

export const Routing: React.SFC<RoutingProps> = () => (
  <BrowserRouter>
    <Switch>
      <HamburgerRoutes exact path="/" screen={HomePage} />
      <HamburgerRoutes exact path="/Discussionboard" screen={DiscussionBoard} />
      <HamburgerRoutes exact path="/Assignments" screen={Assignment} />
      <HamburgerRoutes exact path="/toolBox" screen={ToolBox} />
      <HamburgerRoutes exact path="/makeGate" screen={MakeGate} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
