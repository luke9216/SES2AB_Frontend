import * as React from "react";
import { Grid, Divider, Button } from "@material-ui/core";
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


const AssignmentForm: React.SFC<AssignmentFormProps> = () => {
  const classes = assignmentStyles();

  return (
    <div>
      <h1 className={classes.title1}>Assignments</h1>
      <div>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Assignment 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Your assignment is to make a circuit using A, B and C included.
              <p>
                  <Button variant="outlined" color="primary" href={"http://localhost:3000/"}>
                    Circuit Page
              </Button>
                  <Button variant="outlined" color="secondary">
                    SUBMIT
              </Button>
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Assignment 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Your assignment is to remake the same circuit without using C.
              <p>
                  <Button variant="outlined" disabled>
                    SUBMIT
              </Button>
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Assignment 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Your assignment is to redo your first 2 assignments... but better!
              <p>
                  <Button variant="outlined" disabled>
                    SUBMIT
              </Button>
                </p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </div>
      <div>
        <Grid>
          <h1 className={classes.title1}>Past Assignments</h1>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Assignment 0</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <p>Your assignment is to open Assignment 1.</p>
                <p>Result: 16/20</p>
                <p>Comment: well done!</p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </div>
    </div>
  );
};

export default AssignmentForm;
