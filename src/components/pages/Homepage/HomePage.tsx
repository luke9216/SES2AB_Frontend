import React from "react";
import { Typography } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import NavigationButtons, {
  NavigationButtonsTab,
} from "../../common/NavigationButtons";
import navigationTabs from "../../common/__data__/data.navigationTabs.json";
import logo from "../../../images/uts-logo.png";
import { logoStyles } from "../../common/styles";
import Bulletin from "./Bulletin";
import Todo from "./Todo"

export interface HomePageProps {
  props?: any;
  match?: RouteComponentProps;
}

const HomePage: React.SFC<HomePageProps> = ({ props }) => {
  const classes = logoStyles();
  return (
    <React.Fragment>
      <div>
        <img src={logo} className={classes.logo} alt="UTS Logo" />
        <Typography variant="h3">UTS: Quantum Computing</Typography>
      </div>
      <div>
        <Bulletin />
      </div>
      <div>
        <Todo />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
