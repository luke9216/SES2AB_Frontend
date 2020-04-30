import React, { FunctionComponent } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HamburgerRoutes } from "./../common/Hamburger/HamburgerRoutes";
import HomePage from "./HomePage";

export interface RoutingProps {}

export const Routing: React.SFC<RoutingProps> = () => (
  <BrowserRouter>
    <Switch>
      <HamburgerRoutes exact path="/" screen={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
