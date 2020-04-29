import * as React from "react";
import { assignmentStyles } from "./style";
import AssignmentForm, { IAssignmentTypes } from "./AssignmentForm";
import assignments from "../../common/__data__/data.Assignments.json";

export interface AssignmentProps {}

const onClick = () => (event: any) => {
  console.log("this button was clicked");
};

const Assignment: React.SFC = () => {
  const classes = assignmentStyles();
  return (
    <div>
      <AssignmentForm assignments={assignments as Array<IAssignmentTypes>} />
    </div>
  );
};

export default Assignment;
