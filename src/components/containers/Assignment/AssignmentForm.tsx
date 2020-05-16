import * as React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import { Grid, List, Divider, Button } from "@material-ui/core";
import { assignmentStyles } from "./style";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";

export interface AssignmentFormProps {
  props?: any;
  assignments: Array<IAssignmentTypes>;
  drawerAssignmentDetails?: Array<IAssignmentTools>;
}

export interface IAssignmentTypes {
  AssignmentID: String;
  Description: String;
}


export interface IAssignmentTools {
  name: string;
  path: string;
}

//assignments, children,  
const AssignmentForm: React.SFC<AssignmentFormProps> = ({ assignments }) => {
  const classes = assignmentStyles();
  const theme = useTheme();

  return (
    <div>
      <h1 className={classes.title1}>Assignments</h1>
      <div>

        <Grid className={classes.toolbox}>
          <List>
            <ListItem button >
              <Button >
                <ListItemIcon>
                  <AddBoxIcon fontSize="large" className={classes.iconstyle} />
                </ListItemIcon>
                <ListItemText />
              </Button>
            </ListItem>
          </List>
        </Grid>

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
                  <Button variant="outlined" color="primary" href="http://localhost:3000/toolbox">
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
