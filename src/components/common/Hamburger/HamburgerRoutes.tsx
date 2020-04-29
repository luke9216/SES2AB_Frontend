import React, { ComponentType, FunctionComponent } from "react";
import { Route, RouteProps } from "react-router-dom";
import Hamburger from "./Hamburger";

type HamburgerRoutesProps = RouteProps & {
  screen: ComponentType;
};

export const HamburgerRoutes: FunctionComponent<HamburgerRoutesProps> = ({
  screen: Screen,
  ...route
}) => (
  <Route
    {...route}
    render={() => (
      <Hamburger>
        <Screen />
      </Hamburger>
    )}
  />
);
export default HamburgerRoutes;
