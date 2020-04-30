import React, { ComponentType, FunctionComponent } from "react";
import { Route, RouteProps } from "react-router-dom";
import Hamburger, { IhamburgerTypes } from "./Hamburger";
import drawerDetails from "../__data__/data.drawerDetails.json";

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
      <Hamburger drawerDetails={drawerDetails as Array<IhamburgerTypes>}>
        <Screen />
      </Hamburger>
    )}
  />
);
export default HamburgerRoutes;
