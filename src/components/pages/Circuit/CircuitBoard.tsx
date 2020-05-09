import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import { paperStyles } from "./harryStyles";
export interface CircuitBoardProps {
  gates: Array<string>;
  handleDrag: Function;
  handleDragStart: Function;
  handleDragEnd: Function;
  handleDelete: Function;
}

const CircuitBoard: React.SFC<CircuitBoardProps> = ({
  gates,
  handleDelete,
  handleDrag,
  handleDragStart,
  handleDragEnd,
}) => {
  const classes = paperStyles();
  return (
    <Grid container direction="row" className={classes.circuitGates}>
      {gates.map((item, j) => (
        <div
          key={j}
          draggable
          onDragOver={(e) => handleDrag(e, item, j)}
          onDragStart={(e) => handleDragStart(e, item, j)}
        >
          <Grid spacing={4}>
            <Button key={j} onClick={(event) => handleDelete(event, j)}>
              {item}
            </Button>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default CircuitBoard;
