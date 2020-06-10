import * as React from "react";
import { assignmentStyles } from "./style";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import { Grid, List, Divider, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export interface AssignmentCreate {}

const AssignmentCreate: React.SFC = () => {
  const classes = assignmentStyles();

  return (
    <div>
      <h1 className={classes.title1}>Create Assignments</h1>
      <Grid className={classes.FormBackground}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="assignmentnumber"
              name="assignmentnumber"
              label="Assignment number"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="assignmentname"
              name="assignmentname"
              label="Assignment Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description1"
              name="description1"
              label="Description 1"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description2"
              name="description2"
              label="Additional Comments"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="startdate"
              name="startdate"
              label="Start Date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="duedate"
              name="duedate"
              label="Due Date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Acceptance criteria"
              name="acceptancecriteria"
              label="Acceptance criteria"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="maxmark"
              name="maxmark"
              label="Max Mark"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <div className={classes.Buttonlocation}>
            <Button variant="outlined" color="primary" href="/assignments">
              Next
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AssignmentCreate;
