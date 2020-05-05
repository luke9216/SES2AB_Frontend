import * as React from "react";
import { Grid, Button } from "@material-ui/core";

export interface CircuitBoardProps {
  gates: Array<string>;
  handleDelete: Function;
}

const CircuitBoard: React.SFC<CircuitBoardProps> = ({
  gates,
  handleDelete,
}) => {
  return (
    <div>
      {gates.map((item) => (
        <Button onClick={(event) => handleDelete(event, item)}>{item}</Button>
      ))}
    </div>
  );
};

export default CircuitBoard;
