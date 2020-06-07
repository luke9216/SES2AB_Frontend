import React, { ComponentType, FunctionComponent } from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { HamburgerRoutes } from "./../../common/Hamburger/HamburgerRoutes";
import drawerAssignmentDetails from "../../../components/common/__data__/drawerAssignmentDetails.json";
import AssignmentCreate from './AssignmentCreate';
import Assignment from "./../../pages/Assignment";

// type AssignmentRoutesProps = RouteProps & {
//   screen: ComponentType;
// };

// export const AssignmentRoutes: FunctionComponent<AssignmentRoutesProps> = ({screen: Screen, ...route}) => (
//     <Route {...route}
//            render={() => (

//     )}/>
// );

export const AssignmentRoutes: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <HamburgerRoutes exact path="/assignments" screen={Assignment} />
      <HamburgerRoutes exact path="/assignments/create" screen={AssignmentCreate} />
    </Switch>
  </BrowserRouter>
);
