import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { paperStyles } from "./styles";
import logo from "../../../images/uts-logo.png";
import { logoStyles } from "../../common/styles";
import Bulletin from "./Bulletin";
import Todo from "./Todo";

export interface HomePageProps {
  props?: any;
  match?: RouteComponentProps;
}

const HomePage: React.SFC<HomePageProps> = ({ props }) => {
  const logoClasses = logoStyles();
  const classes = paperStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <img src={logo} className={logoClasses.logo} alt="UTS Logo" />
        <Typography variant="h3">UTS: Quantum Computing</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item className={classes.border}>
          <Bulletin />
        </Grid>
        <Grid item className={classes.border}>
          <Todo />
        </Grid>
      </Grid>
      <div></div>
    </React.Fragment>
  );
};

export default HomePage;
