import * as React from "react";
import { Grid, Button } from "@material-ui/core";

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
  return (
    <Grid container direction="row">
      {gates.map((item) => (
        <li key={item} onDragOver={(e) => handleDrag(e, item)}>
          <div
            className="drag"
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={(e) => handleDragStart(e)}
          >
            <Button onClick={(event) => handleDelete(event, item)}>
              {item}
            </Button>
          </div>
        </li>
      ))}
    </Grid>
  );
};

export default CircuitBoard;
