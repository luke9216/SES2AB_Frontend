import React from "react";
import { RouteComponentProps } from "react-router";
import Grid from "@material-ui/core/Grid";
import { paperStyles } from "./styles";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export interface FromMatrixProps {}

const FromMatrix: React.SFC<FromMatrixProps> = () => {
  const classes = paperStyles();
  return (
    <Grid container spacing={3} justify={"space-around"}>
      <Grid item xs={12} className={classes.paper}>
        <text>From Matrix</text>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          multiline
          placeholder="1, i, i, 1"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={10}>
        <RadioGroup>
          <FormControlLabel
            value="checked"
            control={<Radio />}
            label="ensure unitary (by SVD)"
          />
        </RadioGroup>
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

export default FromMatrix;
