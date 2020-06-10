import * as React from "react";
import { Grid, Divider } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./GateTypes";
import { paperStyles } from "./styles";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import Canvas from './Canvas';

export interface ToolBoxProps {
  props?: any;
}

const state = {
  toolBox: [],
  circuits: [],
};

const onDragStart = (event: any, id: any) => {
  console.log("drag start", id);
  event.dataTransfer.setData("id", id);
};

const onDragOver = (event: any) => {
  event.preventDefault();
  console.log("drag over");
};

const onDrop = (event: any, cat: any) => {
  let id = event.dataTransfer.getData("id");

  let gates = gateTypes.map((tab: GateButtonTab) => {
    if (tab.name === id) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      tab.category === cat;
    }
    return tab;
  });

  console.log("Circuit:", gates);
  console.log("Gate Name:", id);
};

const ToolBox: React.SFC<ToolBoxProps> = () => {
  var circuitBoard = {
    default: [],
    using: [],
  };
  

  const classes = paperStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" spacing={10} className={classes.divTop}>
        <GateTypes
          handleDragStart={onDragStart}
          gateTypes={gateTypes as Array<GateButtonTab>}
        />
      <Grid container direction="column">
      <Canvas/>
      </Grid>
        
        <Grid container className={classes.frame}>
          <div
            className={classes.circuit}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, "circuits")}
          >
            {circuitBoard.using}
          </div>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
  
};

export default ToolBox;
