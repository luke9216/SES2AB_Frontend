import React, { FunctionComponent } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ToolBox from "./ToolBox/ToolBox";
import { HamburgerRoutes } from "./../common/Hamburger/HamburgerRoutes";
import HomePage from "./HomePage";

export interface RoutingProps {}

export const Routing: React.SFC<RoutingProps> = () => (
  <BrowserRouter>
    <Switch>
      <HamburgerRoutes exact path="/" screen={HomePage} />
      <HamburgerRoutes exact path="/toolbox" screen={ToolBox} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
