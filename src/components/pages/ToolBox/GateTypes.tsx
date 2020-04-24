import * as React from "react";
import { Grid, Tooltip, Button  } from "@material-ui/core";

export interface GateTypeProps {
  types: Array<GateTypeTab>;
}

export interface GateTypeTab {
  name: string;
}

const GateTypes: React.SFC<GateTypeProps> = ({ types }) => {
  return (
      <div> 
      <Tooltip title="Measures whether a qubit is ON or OFF, condition on the result">
        <Button>Measurement</Button>
      </Tooltip>
      </div>
  );
};

export default GateTypes;
