import * as React from "react";
import { Grid } from "@material-ui/core";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import GateTypes, { GateTypeTab } from "./GateTypes";

export interface ToolBoxProps {
  props?: any;
}

export interface ToolBox {
  name: string;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  return <GateTypes types={gateTypes as Array<GateTypeTab>}></GateTypes>;
};

export default ToolBox;
