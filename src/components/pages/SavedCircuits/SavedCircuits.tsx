import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ToolBox from "./../Circuit/Circuit";
export interface SavedCircuitsProps {
  classes?: any;
  savedCircuits?: any;
  circuitId?: any;
  circuits?: any;
}

/*       <h1 className={classes.title1}>Saved circuits!</h1>
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
      </div> */

const SavedCircuits: React.SFC<SavedCircuitsProps> = ({
  classes,
  circuitId,
  circuits,
}) => {
  const location = {
    pathname: "/workshop/" + circuitId,
    state: circuits as Array<any>,
  };
  return (
    <div>
      <h1 className={classes.title1}>
        <Link to={location}>{circuitId}</Link>
      </h1>
    </div>
  );
};

export default SavedCircuits;
