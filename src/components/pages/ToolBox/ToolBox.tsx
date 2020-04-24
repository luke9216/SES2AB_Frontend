import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import GateTypes from "./GateTypes";
import { paperStyles } from "./styles";

export interface ToolBoxProps {
  props?: any;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const classes = paperStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" spacing={10} className={classes.divTop}>
        <GateTypes></GateTypes>;
      </Grid>
    </React.Fragment>
  );
};

export default ToolBox;
