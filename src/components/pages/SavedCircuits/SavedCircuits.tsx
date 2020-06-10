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
import { Button } from "@material-ui/core";
export interface SavedCircuitsProps {
  classes?: any;
  savedCircuits: Array<ICircuitList>;
  handleTest: any;
}

export interface ICircuitList {
  circuitId: string;
  circuit: Array<any>;
}

const SavedCircuits: React.SFC<SavedCircuitsProps> = ({
  classes,
  handleTest,
  savedCircuits,
}) => {
  return (
    <div>
      <h1 className={classes.title1}>Your saved circuits!</h1>
      {savedCircuits.map((item: ICircuitList, i) => (
        <Link
          to={{
            pathname: "/workshop/" + item.circuitId,
            state: item.circuit as Array<any>,
          }}
        >
          <h2 className={classes.title2}>{item.circuitId}</h2>
        </Link>
      ))}
    </div>
  );
};

export default SavedCircuits;
