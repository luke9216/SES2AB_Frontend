import React from "react";
import { RouteComponentProps } from "react-router";
import FromRotation from "./FromRotation";
import FromCircuit from "./FromCircuit";
import FromMatrix from "./FromMatrix";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { paperStyles } from "./styles";

export interface MakeGateProps {
  props?: any;
  match?: RouteComponentProps;
}

const MakeGate: React.SFC<MakeGateProps> = ({ props }) => {
  const classes = paperStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly" className={classes.paper}>
        <FromRotation />
        <FromMatrix />
        <FromCircuit />
      </Grid>
    </div>
  );
};

export default MakeGate;
