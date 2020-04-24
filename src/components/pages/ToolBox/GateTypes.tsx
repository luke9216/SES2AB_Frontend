import * as React from "react";
import { Grid, Button, Tabs, Tooltip } from "@material-ui/core";
import { paperStyles } from "./styles";

var ideas = [
  {
    title: "Probes",
    premises: [" A ", " B ", " AA ", " BB ", " CC "],
    description: "Description for Probes",
  },
  {
    title: "Half Turns",
    premises: [" C ", " D "],
    description: "Description for Half Turns",
  },
  {
    title: "Quarter Turns",
    premises: [" E ", " F "],
    description: "Description for Quarter Turns",
  },
  {
    title: "Eighth Turns",
    premises: [" G ", " H "],
    description: "Description for Eighth Turns",
  },
  {
    title: "Spinning",
    premises: [" K ", " J "],
    description: "Description for Spinning",
  },
  {
    title: "Formulatic",
    premises: [" L ", " M "],
    description: "Description for Formulatic",
  },
];

const GateTypes: React.SFC = () => {
  const classes = paperStyles();

  return (
    <React.Fragment>
      {ideas.map(({ title, premises, description }, i) => (
        <Grid key={i} item direction="row">
          <h1>{title}</h1>
          <Grid container spacing={2}>
            {premises.map((premise, j) => (
              <Grid item spacing={1} xs>
                <Tooltip title={description}>
                  <Button key={j} variant="contained">
                    {premise}
                  </Button>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default GateTypes;
