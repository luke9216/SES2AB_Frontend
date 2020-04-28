import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import { assignmentStyles } from "./style";

export interface AssignmentFormProps {
  handleClose: Function;
}

const AssignmentForm: React.SFC<AssignmentFormProps> = ({ handleClose }) => {
  const classes = assignmentStyles();

  return (
    <div>
      <Grid>
        <h1 className={classes.heading1}>Assignment 1</h1>
        <Divider variant="middle" />
        <h2 className={classes.heading2}>Assignment 1 Description</h2>
        <a className={classes.body1}>TESTTESTTESTTESTTEST</a>
      </Grid>
      <Grid>
        <h1>Assignment 2</h1>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <h1>Assignment 3</h1>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <h1>Assignment 4</h1>
      </Grid>
    </div>
  );
};

export default AssignmentForm;
