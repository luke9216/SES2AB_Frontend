import * as React from "react";
import { assignmentStyles } from "./style";
import AssignmentForm from "./AssignmentForm";

export interface AssignmentProps {}

const onClose = () => (event: any) => {
  console.log("menu closed");
};

const onClick = () => (event: any) => {
  console.log("this button was clicked");
};

const Assignment: React.SFC = () => {
  const classes = assignmentStyles();
  return (
    <div>
      <AssignmentForm handleClose={onClose} />
    </div>
  );
};

export default Assignment;
