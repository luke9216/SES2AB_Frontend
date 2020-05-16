import * as React from "react";
import { assignmentStyles } from "./style";
import { Typography } from "@material-ui/core";

export interface AssignmentCreate { }

const AssignmentCreate: React.SFC = () => {
  const classes = assignmentStyles();
  return (
    <div>
      <Typography>Here you go bestie!!!</Typography>
    </div>
  );
};


export default AssignmentCreate;
