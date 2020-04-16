import * as React from "react";
import { Grid } from "@material-ui/core";

export interface GateTypeProps {
  types: Array<GateTypeTab>;
}

export interface GateTypeTab {
  name: string;
}

const GateTypes: React.SFC<GateTypeProps> = ({ types }) => {
  return (
    <Grid container direction="row" spacing={10}>
      {types.map((tab: GateTypeTab, index: number) => {
        return (
          <div>
            <Grid item spacing={0}>
              <h2>{tab.name}</h2>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
};

export default GateTypes;
