import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./GateTypes";
import { paperStyles } from "./styles";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import { Typography, Link, Box, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export interface ToolBoxProps {
  props?: any;
}

/* 
    if (tab.name == id) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      tab.category == cat;
    }
    return tab;
*/

const onDragStart = (event: any, id: any) => {
  console.log("drag start", id);
  event.dataTransfer.setData("id", id);
};

const onDragOver = (event: any) => {
  event.preventDefault();
  console.log("drag over");
};

export interface ICircuitBoard {
  using: Array<String>;
}

const circuitBoard = {
  using: [],
} as ICircuitBoard;

const onDrop = (event: any, cat: any) => {
  let id = event.dataTransfer.getData("id");

  gateTypes.map((tab: GateButtonTab) => {
    let gates = tab.gates.filter((gate) => {
      if (gate == id) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        gate === cat;
      }
      return gate;
    });
    circuitBoard.using = gates;
    console.log("circuit board:", circuitBoard.using);
  });

  //console.log("Circuit:", name);
  //console.log("Gate Name:", id);
  //console.log("Array:", circuitBoard.using);
};

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const classes = paperStyles();
  return (
    <div>
      <h1 className={classes.title1}>ToolBox</h1>
      <div>
        <Grid container direction="row" spacing={5} className={classes.divTop}>
          <GateTypes
            gateTypes={gateTypes as Array<GateButtonTab>}
            handleDragStart={onDragStart}
          />
          ;
        </Grid>
        <h1 className={classes.title1}>Circuit</h1>
        <Grid
          container
          direction="row"
          spacing={5}
          className={classes.CircuitBoxFrame}
        >
          <div
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, "circuits")}
            className={classes.circuit}
          >
            CircuitBoards; {circuitBoard.using}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default ToolBox;
