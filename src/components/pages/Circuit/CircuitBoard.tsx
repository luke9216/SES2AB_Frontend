import * as React from "react";
import { Grid, Button, Tooltip } from "@material-ui/core";
import { paperStyles } from "./harryStyles";
export interface CircuitBoardProps {
  symbol: string;
  gates: Array<string>;
  handleDrag: Function;
  handleDragStart: Function;
  handleDragEnd: Function;
  handleDelete: Function;
  handleStartCircuit: Function;
}

const CircuitBoard: React.SFC<CircuitBoardProps> = ({
  symbol,
  gates,
  handleDelete,
  handleDrag,
  handleDragStart,
  handleDragEnd,
  handleStartCircuit,
}) => {
  const classes = paperStyles();
  return (
    <Grid container direction="row">
      <Grid item>
        <Button
          size="large"
          style={{ backgroundColor: "white" }}
          onClick={() => handleStartCircuit()}
        >
          {symbol}
        </Button>
      </Grid>
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
              <Button
                disableElevation={true}
                disableFocusRipple={true}
                disableRipple={true}
                style={{ backgroundColor: "white" }}
                className={classes.button}
                size="large"
                key={j}
                onClick={(event) => handleDelete(event, j)}
              >
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
