import * as React from "react";
import { Grid } from "@material-ui/core";

export interface TodoProps {}

const Todo: React.SFC<TodoProps> = () => {
  return (
    <div>
      <h1>This is the Todo module</h1>
      <Grid container>
        <h2>Heres what's left for you to do</h2>
      </Grid>
    </div>
  );
};

export default Todo;
