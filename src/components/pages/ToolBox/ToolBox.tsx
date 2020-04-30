import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./GateTypes";
import { paperStyles } from "./styles";
import gateTypes from "../../common/__data__/data.gateTypes.json";

export interface ToolBoxProps {
  props?: any;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const classes = paperStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" spacing={10} className={classes.divTop}>
        <GateTypes gateTypes={gateTypes as Array<GateButtonTab>} />;
      </Grid>
    </React.Fragment>
  );
};

export default ToolBox;
