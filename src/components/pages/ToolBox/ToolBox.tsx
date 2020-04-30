import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./GateTypes";
import { paperStyles } from "./styles";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import { Typography, Link, Box, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export interface ToolBoxProps {
  props?: any;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const classes = paperStyles();
  return (


      <div>
        <h1 className={classes.title1}>ToolBox</h1>
        <div>


      <Grid container direction="row" spacing={5} className={classes.divTop}>
        <GateTypes gateTypes={gateTypes as Array<GateButtonTab>} />;
      </Grid>

<h1 className={classes.title1}>Circuit</h1>
<Grid container direction="row" spacing={5} className={classes.CircuitBoxFrame}>

</Grid>
     </div>
     </div>




  );
};

export default ToolBox;
