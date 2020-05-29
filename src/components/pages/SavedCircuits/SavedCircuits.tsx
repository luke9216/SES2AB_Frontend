import * as React from "react";
import { paperStyles } from "./harryStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Link } from "@material-ui/core";
export interface SavedCircuitsProps {}

const SavedCircuits: React.SFC<SavedCircuitsProps> = () => {
  const classes = paperStyles();
  return (
    <div>
      <h1 className={classes.title1}>Saved circuits!</h1>
      <div>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Cicuit for assignment 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Link href="/workshop">Your circuit</Link>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </div>
    </div>
  );
};

export default SavedCircuits;
