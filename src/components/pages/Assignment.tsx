import * as React from "react";
import AssignmentForm, {
  IAssignmentTypes,
} from "./../containers/Assignment/AssignmentForm";
import assignments from "../common/__data__/data.Assignments.json";

export interface AssignmentProps {}

const Assignment: React.SFC = () => {
  return (
    <div>
      <AssignmentForm assignments={assignments as Array<IAssignmentTypes>} />
    </div>
  );
};

export default Assignment;
