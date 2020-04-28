import * as React from "react";
import { Grid } from "@material-ui/core";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import GateTypes, { GateButtonTab } from "./GateTypes";

export interface ToolBoxProps {
  props?: any;
}

export interface ToolBox {
  name: string;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  return (
    <div>
      <GateTypes gateTypes={gateTypes as Array<GateButtonTab>}></GateTypes>;
    </div>
  );
};

export default ToolBox;
