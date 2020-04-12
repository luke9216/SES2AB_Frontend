import React from "react";
import { RouteComponentProps } from "react-router";

export interface FromMatrixProps {
  props?: any;
  match?: RouteComponentProps;
}

const FromMatrix: React.SFC<FromMatrixProps> = () => {
  return (
    <div>
      <a>From Matrix</a>
    </div>
  );
};

export default FromMatrix;
