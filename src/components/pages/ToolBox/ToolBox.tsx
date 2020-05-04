import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import GateTypes, { GateButtonTab } from "./GateTypes";
import { paperStyles } from "./harryStyles";
import gateTypes from "../../common/__data__/data.gateTypes.json";

export interface ToolBoxProps {
  props?: any;
}

export interface ICircuitBoard {
  circuit: Array<string>;
}

const ToolBox: React.SFC<ToolBoxProps> = () => {
  const [circuitState, setCircuit] = React.useState({
    circuit: [""],
  } as ICircuitBoard);

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
        <div
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e)}
          className={classes.circuit}
        >
          {circuitState.circuit.map((item) => (
            <Button onClick={(event) => onDelete(event, item)}>{item}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
