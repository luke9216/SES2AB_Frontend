import * as React from "react";
import { Grid, Button, Tabs } from "@material-ui/core";
import { paperStyles } from "./styles";

export interface GateTypeProps {
  types: Array<GateTypeTab>;
}

export interface GateTypeTab {
  name: string;
  gates: Array<String>;
}

const GateTypes: React.SFC<GateTypeProps> = ({ types }) => {
  const classes = paperStyles();

  return (
    <Grid
      container
      direction="row"
      spacing={10}
      className={classes.toolBoxFrame}
    >
      {types.map((tab: GateTypeTab, index) => {
        return (
          <Grid item spacing={0}>
            <h2 key={tab.name}>{tab.name}</h2>
            <Grid>
              {types.map((tab: GateTypeTab) => {
                return <Button key={tab.name}>{tab.gates}</Button>;
              })}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GateTypes;
