import React, { FunctionComponent } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HamburgerRoutes } from "./../common/Hamburger/HamburgerRoutes";
import LoginPage from "./LoginPage";
import HomePage from "./Homepage/HomePage";
import DiscussionBoard from "./DiscussionBoard/DiscussionBoard";
import Assignment from "./Assignment";
import ToolBox from "./ToolBox/ToolBox";
import MakeGate from "./makeGate/MakeGate";
import Resources from "./Resources/Resources";
import { Route } from "react-router-dom";
import Forum from './DiscussionBoard/Forum';
import Thread from './DiscussionBoard/Thread';
<<<<<<< Updated upstream
import Message from './DiscussionBoard/Message';
=======
import Message from './DiscussionBoard/Message'
>>>>>>> Stashed changes

export interface RoutingProps {}

export const Routing: React.SFC<RoutingProps> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" render={() => <LoginPage />} />
      <HamburgerRoutes exact path="/" screen={HomePage} />
      <HamburgerRoutes exact path="/discussionboard" screen={Forum} />
      <HamburgerRoutes exact path="/createthread" screen={Thread} />
      <HamburgerRoutes exact path="/assignments" screen={Assignment} />
      <HamburgerRoutes exact path="/workshop" screen={ToolBox} />
      <HamburgerRoutes exact path="/makeGate" screen={MakeGate} />
      <HamburgerRoutes exact path="/resources" screen={Resources} />
<<<<<<< Updated upstream
      <HamburgerRoutes exact path="/createMessage" screen={Message} />
=======
      <HamburgerRoutes exact path="/createmessage" screen={Message} />
>>>>>>> Stashed changes
    </Switch>
  </BrowserRouter>
);

export default Routing;
