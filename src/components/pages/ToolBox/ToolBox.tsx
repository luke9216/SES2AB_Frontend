import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import GateTypes, { GateTypeTab } from "./GateTypes";
import { paperStyles } from "./styles";

export interface ToolBoxProps {
  props?: any;
}

export interface ToolBox {
  name: string;
}
//

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const classes = paperStyles();
  return (
    <React.Fragment>
      <GateTypes types={gateTypes as Array<GateTypeTab>}></GateTypes>;
    </React.Fragment>
  );
};

export default ToolBox;
