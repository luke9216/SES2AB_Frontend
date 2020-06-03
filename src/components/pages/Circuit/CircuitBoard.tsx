import * as React from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";
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
    <Grid container direction="row" className={classes.kenTest}>
      {gates.map((item, j) => (
        <div
          key={j}
          draggable
          onDragOver={(e) => handleDrag(e, j)}
          onDragStart={(e) => handleDragStart(e, j)}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <Grid spacing={4}>
            <Tooltip title="To delete this gate hold down left CTRL and then left click!">
              <Button className={classes.button} key={j} onClick={(event) => handleDelete(event, j)}>
                {item}
              </Button>
            </Tooltip>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default CircuitBoard;
