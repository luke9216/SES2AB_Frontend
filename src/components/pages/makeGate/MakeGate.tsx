import React from "react";
import { RouteComponentProps } from "react-router";
import FromRotation from "./FromRotation";
import FromCircuit from "./FromCircuit";
import FromMatrix from "./FromMatrix";
import Grid from "@material-ui/core/Grid";
import { paperStyles } from "./styles";

export interface MakeGateProps {
  props?: any;
  match?: RouteComponentProps;
}

const MakeGate: React.SFC<MakeGateProps> = ({ props }) => {
  const classes = paperStyles();

  return (
    <div>
      <Grid
        container
        justify="flex-start"
        className={classes.paper}
        direction="row"
        spacing={1}
      >
        <Grid item xs={3}>
          <FromRotation />
        </Grid>
        <Grid item xs={3}>
          <FromMatrix />
        </Grid>
        <Grid item xs={3}>
          <FromCircuit />
        </Grid>
      </Grid>
    </div>
  );
};

export default MakeGate;
