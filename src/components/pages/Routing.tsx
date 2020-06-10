import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HamburgerRoutes } from "./../common/Hamburger/HamburgerRoutes";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Homepage/HomePage";
import Assignment from "./Assignment";
import ToolBox from "./Circuit/Circuit";
import MakeGate from "./makeGate/MakeGate";
import Resources from "./Resources/Resources";
import ResourcesForm from "./Resources/ResourcesForm";
import { Route } from "react-router-dom";
import Forum from "./DiscussionBoard/Forum";
import Thread from "./DiscussionBoard/Thread";
import SavedCircuitsContainer from "./SavedCircuits/SavedCircuitsContainer";
import { AssignmentRoutes } from "./../containers/Assignment/AssignmentRoutes";

export interface RoutingProps {}

export const Routing: React.SFC<RoutingProps> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" render={() => <LoginPage />} />
      <HamburgerRoutes exact path="/" screen={HomePage} />
      <HamburgerRoutes exact path="/discussionboard" screen={Forum} />
      <HamburgerRoutes exact path="/createthread" screen={Thread} />
      <HamburgerRoutes exact path="/assignments" screen={Assignment} />
      <HamburgerRoutes path="/workshop" screen={ToolBox} />
      <HamburgerRoutes screen={AssignmentRoutes} />
      <HamburgerRoutes exact path="/makeGate" screen={MakeGate} />
      <HamburgerRoutes exact path="/resources" screen={Resources} />
      <HamburgerRoutes exact path="/resources/upload" screen={ResourcesForm} />
      <HamburgerRoutes exact path="/circuits" screen={SavedCircuitsContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
