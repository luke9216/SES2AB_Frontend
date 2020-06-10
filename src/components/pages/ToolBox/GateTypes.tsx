import * as React from "react";
import { Grid, Button, Tabs, Tooltip } from "@material-ui/core";

interface GateTypesProps {
  gateTypes: Array<GateButtonTab>;
  handleDragStart: Function;
}

export interface GateButtonTab {
  name: string;
  gates: Array<String>;
  description: string;
  category: string;
}
const GateTypes: React.SFC<GateTypesProps> = ({
  gateTypes,
  handleDragStart,
}) => {
  return (
    <React.Fragment>
      {gateTypes.map((tab: GateButtonTab, i) => (
        <Grid key={i} item direction="row">
          <h1>{tab.name}</h1>
          <Grid container spacing={2}>
            {tab.gates.map((gate, j) => (
              <div
                className="draggable"
                draggable
                onDragStart={(e) => handleDragStart(e, gate)}
              >
                <Tooltip title={tab.description}>
                  <Grid item spacing={1} xs>
                    <Button key={j} variant="contained">
                      {gate}
                    </Button>
                  </Grid>
                </Tooltip>
              </div>
            ))}
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default GateTypes;
