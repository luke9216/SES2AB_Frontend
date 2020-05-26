import * as React from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./Gates";
import { paperStyles } from "./harryStyles";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import CircuitBoard from "./CircuitBoard";

export interface ToolBoxProps {
  props?: any;
}

export interface ICircuitBoard {
  circuit: Array<any>;
  newCircuit: Array<any>;
  circuitGate: number;
  circuitHistory: Array<Array<any>>;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const [circuitState, setCircuit] = React.useState({
    circuit: [],
    newCircuit: [],
    circuitGate: 0,
    circuitHistory: [[]],
  } as ICircuitBoard);

  const onDragStart = (event: any, id: any) => {
    console.log("Dragging gate from toolbox", id);
    event.dataTransfer.setData("id", id);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDragDrop = (event: any) => {
    let id = event.dataTransfer.getData("id");
    const newCircuit = circuitState.circuit.concat(id).filter(Boolean);
    setCircuit({
      ...circuitState,
      circuit: newCircuit,
    });
    circuitState.circuitHistory.push(newCircuit);
  };
  const onDragGateStart = (event: any, index: number) => {
    setCircuit({
      ...circuitState,
      circuitGate: index,
    });
  };

  const onDragGateOver = (event: any, index: number) => {
    const dragGate = circuitState.circuit[circuitState.circuitGate];
    const draggedOverGate = circuitState.circuit[index];
    if (dragGate === draggedOverGate) {
      return;
    }

    const items = circuitState.circuit;
    items.splice(circuitState.circuitGate, 1);
    items.splice(index, 0, dragGate);
    setCircuit({
      ...circuitState,
      newCircuit: items,
      circuitGate: index,
    });
  };

  const onDragGateEnd = (event: any, index: number) => {
    const items = circuitState.newCircuit;
    const newHistory = circuitState.circuitHistory.concat(items);
    setCircuit({
      ...circuitState,
      circuit: items,
      circuitGate: index,
      circuitHistory: newHistory,
    });
  };

  const onDelete = (event: any, index: number) => {
    const items = circuitState.circuit;
    if (event.ctrlKey) {
      if (index > -1) {
        items.splice(index, 1);
      }
      setCircuit({
        ...circuitState,
        circuit: items,
      });
    } else {
      return;
    }
  };

  const onClear = (event: any) => {
    setCircuit({
      ...circuitState,
      circuit: [],
    });
  };

  const onCheck = (event: any) => {
    circuitState.circuitHistory.filter(
      (v, i) => circuitState.circuitHistory.indexOf(v) === i
    );
    console.log("Current Circuit:", circuitState.circuit);
    console.log("Current History:", circuitState.circuitHistory);
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
          <Button onClick={onClear}>Clear all</Button>
          <Button>Undo</Button>
          <Button disabled>Redo</Button>
          <Button onClick={onCheck}>Check</Button>
        </Grid>
        <h1 className={classes.title1}>Circuit</h1>
        <div
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDragDrop(e)}
          className={classes.circuit}
        >
          <CircuitBoard
            handleDelete={onDelete}
            handleDrag={onDragGateOver}
            handleDragStart={onDragGateStart}
            handleDragEnd={onDragGateEnd}
            gates={circuitState.circuit}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
