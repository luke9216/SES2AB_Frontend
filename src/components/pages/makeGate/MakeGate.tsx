import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import FromRotation from "./FromRotation";
import FromCircuit from "./FromCircuit";
import FromMatrix from "./FromMatrix";
import Grid from "@material-ui/core/Grid";
import { paperStyles } from "./styles";

export interface MakeGateProps {
  props?: any;
  match?: RouteComponentProps;
  axis?: String;
  angle?: String;
}

const printValue = () => (event: any) => {
  var message: string = "RENZ WAS HERE";
  console.log(message);
};

export const MakeGate: React.FunctionComponent<MakeGateProps> = () => {
  const classes = paperStyles();
  const [axis, setAxis] = useState(0);

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
          <FromRotation handleChange={setAxis} handleClick={printValue} />
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
