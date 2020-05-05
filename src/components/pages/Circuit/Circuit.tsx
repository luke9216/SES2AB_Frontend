import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./Gates";
import { paperStyles } from "./harryStyles";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import CircuitBoard from "./CircuitBoard";

export interface ToolBoxProps {
  props?: any;
}

export interface ICircuitBoard {
  circuit: Array<string>;
  history: Array<string>;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  // This is the list of gates used in the circuit //
  const [circuitState, setCircuit] = React.useState({
    circuit: [""],
  } as ICircuitBoard);
  // -------------------------------------------------//

  const onDragStart = (event: any, id: any) => {
    console.log("drag start", id);
    event.dataTransfer.setData("id", id);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDrop = (event: any) => {
    let id = event.dataTransfer.getData("id");

    setCircuit({
      ...circuitState,
      circuit: circuitState.circuit.concat(id),
    });

    console.log("gate", id);
  };

  const onDelete = (event: any, id: string) => {
    const items = circuitState.circuit.filter((gate: string) => gate !== id);
    setCircuit({
      ...circuitState,
      circuit: items,
    });
  };

  const onClear = (event: any) => {
    // const items = [];
    setCircuit({
      ...circuitState,
      circuit: [],
      history: [],
    });
  };

  const onUndo = (event: any) => {
    const items = circuitState.circuit.splice(
      0,
      circuitState.circuit.length - 1
    );
    setCircuit({
      ...circuitState,
      circuit: items,
    });
  };

  const onRedo = (event: any) => {
    console.log("I am redoing my work");
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
        </Grid>
        <Grid>
          <Button onClick={(e) => onClear(e)}>Clear all</Button>
          <Button onClick={(e) => onUndo(e)}>Undo</Button>
          <Button disabled onClick={(e) => onRedo(e)}>
            Redo
          </Button>
        </Grid>
        <h1 className={classes.title1}>Circuit</h1>
        <div
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e)}
          className={classes.circuit}
        >
          <CircuitBoard handleDelete={onDelete} gates={circuitState.circuit} />
        </div>
        <div>DROP HERE</div>
      </div>
    </div>
  );
};

export default ToolBox;
