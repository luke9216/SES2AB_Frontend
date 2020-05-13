import React, { ComponentType, FunctionComponent } from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import AssignmentForm, {IAssignmentTools } from "./AssignmentForm";
import drawerAssignmentDetails from "../../../components/common/__data__/drawerAssignmentDetails.json";

type AssignmentRoutesProps = RouteProps & {
  screen: ComponentType;
};

export const AssignmentRoutes: FunctionComponent<AssignmentRoutesProps> = ({screen: Screen, ...route}) => (
    <Route {...route}
           render={() => (
               <AssignmentForm drawerAssignmentDetails={drawerAssignmentDetails as Array<IAssignmentTools>} >
              <Screen/>
              </AssignmentForm>
          )}/>
);
