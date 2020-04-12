import React from "react";
import { RouteComponentProps } from "react-router";

export interface FromCircuitProps {
  props?: any;
  match?: RouteComponentProps;
}

const FromCircuit: React.SFC<FromCircuitProps> = () => {
  return (
    <div>
      <a>From circuit</a>
    </div>
  );
};

export default FromCircuit;
