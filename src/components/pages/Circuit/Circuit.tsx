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
  circuitGate: string;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  // This is the list of gates used in the circuit //
  const [circuitState, setCircuit] = React.useState({
    circuit: [""],
    circuitGate: "",
  } as ICircuitBoard);
  // -------------------------------------------------//

  const onDragStart = (event: any, id: any) => {
    console.log("Dragging gate from toolbox", id);
    event.dataTransfer.setData("id", id);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDragDrop = (event: any) => {
    let id = event.dataTransfer.getData("id");
    setCircuit({
      ...circuitState,
      circuit: circuitState.circuit.concat(id).filter(Boolean),
    });
    console.log("Added gate to circuit:", id);
  };

  const onDragGateStart = (event: any, id: string) => {
    setCircuit({
      ...circuitState,
      circuitGate: id,
    });
    console.log("Dragging circuit gates", id);
    // event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
  };
  const onDragGateOver = (event: any, id: string) => {
    const index = circuitState.circuit.indexOf(id);
    const draggedOverGate = id;
    if (circuitState.circuitGate === draggedOverGate) {
      return;
    }

    const items = circuitState.circuit.filter(
      (item) => item !== circuitState.circuitGate
    );
    items.splice(index, 0, circuitState.circuitGate);

    setCircuit({
      ...circuitState,
      circuit: items,
    });
  };

  const onDragGateEnd = (event: any) => {
    event.preventDefault();
  };

  const onDelete = (event: any, id: string) => {
    const index = circuitState.circuit.indexOf(id);
    console.log(index);
    console.log(id);
    /*  const items = circuitState.circuit;
    if (index > -1) {
      items.splice(index, 1);
    }
    setCircuit({
      ...circuitState,
      circuit: items,
    }); */
  };

  const onClear = (event: any) => {
    // const items = [];
    setCircuit({
      ...circuitState,
      circuit: [],
    });
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
        <div>DROP HERE</div>
      </div>
    </div>
  );
};

export default ToolBox;