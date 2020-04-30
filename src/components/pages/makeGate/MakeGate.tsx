import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import FromRotation from "./FromRotation";
import FromCircuit from "./FromCircuit";
import FromMatrix from "./FromMatrix";
import Grid from "@material-ui/core/Grid";
import { paperStyles } from "./styles";
import { TextField, Button } from "@material-ui/core";

/* const rotationStates = {
  axis: "",
  angle: "",
} as IRotationDetails;

const [values, setValues] = useState<IRotationDetails>(rotationStates);

  const onRotationChange = (details: string) => (event: any) => {
    details = event.target.value;

    setValues({
      ...values,
      [details]: event.target.value,
    });
  }; 
  export interface IRotationDetails {
    axis: string;
    angle: string;
  }
  
  */

export interface MakeGateProps {
  props?: any;
}

const MakeGate: React.FunctionComponent<MakeGateProps> = () => {
  const [state, setState] = useState({
    testaxis: "test axis",
    angle: "test angle",
  });

  const handleChange = () => (event: any) => {
    const value = event.target.value;
    console.log(value);
    setState({
      ...state,
      [event.target.name]: value,
    });
    console.log(event.target.name);
  };

  const onAxisChange = (details: string) => (event: any) => {
    details = event.target.value;
    state.testaxis = details;
    console.log(state.testaxis);
  };

  const onSubmit = () => (event: any) => {
    console.log(state.testaxis);
  };
  const classes = paperStyles();
  return (
    <div>
      <input name={state.testaxis} onChange={handleChange()}></input>
      <h1>break</h1>
      <TextField name={state.angle} onChange={handleChange()}></TextField>
      <Button onClick={onSubmit()}>click</Button>
      <Grid
        container
        justify="flex-start"
        className={classes.paper}
        direction="row"
        spacing={1}
      >
        <Grid item xs={3}>
          <FromRotation
            axis={state.testaxis}
            handleChange={handleChange}
            handleSubmit={onSubmit}
          />
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
