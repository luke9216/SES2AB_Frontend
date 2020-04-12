import React from "react";
import { RouteComponentProps } from "react-router";
import { Grid, Button, TextField } from "@material-ui/core";
import { paperStyles } from "./styles";

export interface FromCircuitProps {}

const FromCircuit: React.SFC<FromCircuitProps> = () => {
  const classes = paperStyles();
  return (
    <Grid container spacing={3} justify={"space-around"}>
      <Grid item xs={12} className={classes.paper}>
        <text>From Circuit</text>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Coloumn Range"
          variant="outlined"
          placeholder="1:∞"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Wire Range"
          placeholder="1:∞"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <text> Inputs: (err), Weight: (err)</text>
      </Grid>
      <Grid item xs={12}>
        <text> placeholder</text>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Circuit Symbol"
          placeholder="[The matrix]"
          variant="outlined"
        />
      </Grid>
      <Button variant="contained" color="primary">
        Create Rotation Gate
      </Button>
    </Grid>
  );
};

export default FromCircuit;
