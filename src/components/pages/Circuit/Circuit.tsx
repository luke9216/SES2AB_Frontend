import * as React from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./Gates";
import { paperStyles } from "./harryStyles";
import gateTypes from "../../common/__data__/data.gateTypes.json";
import CircuitBoard from "./CircuitBoard";
import { circuitUpload } from "./../../../services/CircuitService";
import { toast } from "react-toastify";
import UndoIcon from "../../../../node_modules/@material-ui/icons/Undo";
import RedoIcon from "../../../../node_modules/@material-ui/icons/Redo";

export interface ToolBoxProps {
  props?: any;
}

export interface ICircuitBoard {
  circuit: Array<any>;
  newCircuit: Array<any>;
  circuitGate: number;
  circuitHistory: Array<Array<any>>;
  currentHistoryIndex: number;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const [circuitState, setCircuit] = React.useState({
    circuit: [],
    newCircuit: [],
    circuitGate: 0,
    circuitHistory: [[]],
    currentHistoryIndex: 0,
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
    circuitState.circuitHistory.splice(circuitState.currentHistoryIndex + 1);
    circuitState.circuitHistory.push(newCircuit.slice(0));
    setCircuit({
      ...circuitState,
      circuit: newCircuit,
      currentHistoryIndex: circuitState.circuitHistory.length - 1,
    });
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
      circuit: items,
      circuitGate: index,
    });
  };

  const onDragGateEnd = (event: any, index: number) => {
    event.preventDefault();
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
    circuitState.circuitHistory.push([]);
    setCircuit({
      ...circuitState,
      circuit: [],
      currentHistoryIndex: circuitState.circuitHistory.length - 1,
    });
  };

  // do not steal my oc
  const onUndo = (event: any) => {
    if (circuitState.currentHistoryIndex > 0) {
      const newHistoryIndex = circuitState.currentHistoryIndex - 1;
      setCircuit({
        ...circuitState,
        circuit: circuitState.circuitHistory[newHistoryIndex].slice(0),
        currentHistoryIndex: newHistoryIndex,
      });
    }
  };

  const onRedo = (event: any) => {
    if (
      circuitState.currentHistoryIndex <
      circuitState.circuitHistory.length - 1
    ) {
      const newHistoryIndex = circuitState.currentHistoryIndex + 1;
      setCircuit({
        ...circuitState,
        circuit: circuitState.circuitHistory[newHistoryIndex].slice(0),
        currentHistoryIndex: newHistoryIndex,
      });
    }
  };

  const onSubmit = (event: any) => {
    circuitUpload(circuitState.circuit).then((response) => {
      if (response.status === 200) {
        console.log("success:", response.data);
      } else {
        toast.error("An error occured. Please try again later");
        console.log(response);
      }
    });
  };

  const classes = paperStyles();
  return (
    <div>
    <Grid container spacing={1}>
      <Grid item xs = {1}>
        <Button className={classes.clear} variant="outlined" onClick={onClear}>Clear all</Button>
      </Grid>
      <Grid item xs = {2}>
        <Button className={classes.do} startIcon={<UndoIcon />}
            disabled={circuitState.circuitHistory.length === 1}
            onClick={onUndo}
        >
        Undo
        </Button>
        <Button className={classes.do} startIcon={<RedoIcon />}
            disabled={
              circuitState.circuitHistory.length ===
              circuitState.currentHistoryIndex + 1
            }
            onClick={onRedo}
          >
            Redo
        </Button>

      </Grid>
      <Grid>
        <Button className={classes.submit} variant="outlined" onClick={onSubmit}>Submit</Button>
      </Grid>
    </Grid>
      <h1 className={classes.title1}>ToolBox</h1>
      <div>
        <Grid container direction="row" spacing={5} className={classes.divTop}>
          <GateTypes
            gateTypes={gateTypes as Array<GateButtonTab>}
            handleDragStart={onDragStart}
          />
        </Grid>
        <h1 className={classes.title1}>Circuit</h1>
        <div
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDragDrop(e)}
          className={classes.circuitFrame}
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
      <Grid className={classes.kenTest}>
          </Grid>
    </div>
  );
};

export default ToolBox;
