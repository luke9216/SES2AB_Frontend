import * as React from "react";
import { Grid } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./GateTypes";
import { paperStyles } from "./styles";
import gateTypes from "../../common/__data__/data.gateTypes.json";

export interface ToolBoxProps {
  props?: any;
}

export interface ICircuitBoard {
  using: Array<String>;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const [circuitState, setCircuit] = React.useState({
      circuit: []
  });
  
  

  const onDragStart = (event: any, id: any) => {
    console.log("drag start", id);
    event.dataTransfer.setData("id", id);
  };
  
  const onDragOver = (event: any) => {
    event.preventDefault();
  };
  
  const onDrop = (event: any, cat: any) => {
    let id = event.dataTransfer.getData("id");

    setCircuit({
      ...circuitState,
      circuit: id
  })

    console.log("gate", id)
  };

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
            CircuitBoards: {circuitState.circuit}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default ToolBox;
