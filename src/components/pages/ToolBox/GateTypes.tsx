import * as React from "react";
import { Grid, Button, Tabs, Tooltip } from "@material-ui/core";

interface GateTypesProps {
  gateTypes: Array<GateButtonTab>;
}

export interface GateButtonTab {
  name: string;
  gates: Array<String>;
  description: string;
}
const GateTypes: React.SFC<GateTypesProps> = ({ gateTypes }) => {
  return (
    <React.Fragment>
      {gateTypes.map((tab: GateButtonTab, i) => (
        <Grid key={i} item direction="row">
          <h2>{tab.name}</h2>
          <Grid container spacing={2}>
            {tab.gates.map((gate, j) => (
              <Tooltip title={tab.description}>
                <Grid item spacing={1} xs>
                  <Button key={j} variant="contained">
                    {gate}
                  </Button>
                </Grid>
              </Tooltip>
            ))}
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default GateTypes;
