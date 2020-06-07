import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import CircuitBoardForm from "./CircuitBoard";
import { paperStyles } from "./harryStyles";

export interface CircuitBoardProps {
  handleDragOver: Function;
  handleDragDrop: Function;
  handleStartCircuit: Function;
  handleDragGateStart: Function;
  handleDragGateOver: Function;
  handleDragEnd: Function;
  handleDelete: Function;
  symbol: string;
  gates: Array<string>;
}

const CircuitBoard: React.SFC<CircuitBoardProps> = ({
  handleDragOver,
  handleDragDrop,
  handleStartCircuit,
  handleDragGateStart,
  handleDragGateOver,
  handleDragEnd,
  handleDelete,
  symbol,
  gates,
}) => {
  const classes = paperStyles();
  return (
    <div
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDragDrop(e)}
      className={classes.kenTest}
    >
      <Grid container direction="row">
        <Grid item xs={1} className={classes.kenTest}>
          <Button
            style={{ backgroundColor: "white" }}
            className={classes.button}
            onClick={handleStartCircuit()}
          >
            {symbol}
          </Button>
        </Grid>
        <Grid item>
          <CircuitBoardForm
            handleDelete={handleDelete}
            handleDragStart={handleDragGateStart}
            handleDrag={handleDragGateOver}
            handleDragEnd={handleDragEnd}
            gates={gates}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CircuitBoard;
