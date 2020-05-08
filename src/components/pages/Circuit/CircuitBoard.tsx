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
          draggable
          onDragOver={(e) => handleDrag(e, item)}
          onDragStart={(e) => handleDragStart(e, item)}
        >
          <Grid spacing={4}>
            <Button onClick={(event) => handleDelete(event, item)}>
              {item}
            </Button>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default CircuitBoard;
