import React from "react";
import { RouteComponentProps } from "react-router";
import { paperStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";

interface FromRotationProps {
  inputAxis?: any;
}

const FromRotation: React.SFC<FromRotationProps> = () => {
  const classes = paperStyles();

  return (
    <Grid container spacing={3} justify={"space-around"}>
      <Grid item xs={12} className={classes.paper}>
        <text>From Rotation</text>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Axis"
          placeholder="X+Y"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Angle"
          placeholder="45"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Global Phase"
          placeholder="0"
          variant="outlined"
        />
      </Grid>

      <text> placeholder</text>
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

export default FromRotation;
