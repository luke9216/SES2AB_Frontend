import React, { Props } from "react";
import { paperStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";

interface FromRotationProps {
  axis: string;
  handleChange: Function;
  handleSubmit: Function;
}

const FromRotation: React.FunctionComponent<FromRotationProps> = ({
  axis,
  handleChange,
  handleSubmit,
}) => {
  const classes = paperStyles();

  return (
    <Grid container spacing={3} justify={"space-around"}>
      <Grid item xs={12} className={classes.paper}>
        <text>From Rotation</text>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id={axis}
          label="Axis"
          name={axis}
          placeholder="X+Y"
          variant="outlined"
          onChange={handleChange(axis)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Angle" placeholder="45" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Global Phase" placeholder="0" variant="outlined" />
      </Grid>
      <text> placeholder</text>
      <Grid item xs={12}>
        <TextField
          label="Circuit Symbol"
          placeholder="[The matrix]"
          variant="outlined"
        />
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSubmit()}>
        Create Rotation Gate
      </Button>
    </Grid>
  );
};

export default FromRotation;
