import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import { assignmentStyles } from "./style";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export interface AssignmentFormProps {
  assignments: Array<IAssignmentTypes>;
}

export interface IAssignmentTypes {
  AssignmentID: String;
  Description: String;
}

/*
      <Grid>
        <h1 className={classes.title1}>Assignments</h1>
        <h2>Assignment 1 Description</h2>
        <p>Ur assignment is to...</p>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <h2>Assignment 2</h2>
        <p>Ur assignment is to...</p>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <h2>Assignment 3</h2>
        <p>Ur assignment is to...</p>
      </Grid>
      <Divider variant="middle" />
      <Grid>
        <h2>Assignment 4</h2>
      </Grid>
      <Grid>
        <h1 className={classes.title1}>Past Assignments</h1>
      </Grid>
*/

const AssignmentForm: React.SFC<AssignmentFormProps> = () => {
  const classes = assignmentStyles();

  return (
    <div>
      <h1 className={classes.title1}>Assignments</h1>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Assignment 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Ur assignment is too</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default AssignmentForm;
