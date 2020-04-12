import React from "react";
import { RouteComponentProps } from "react-router";

export interface FromRotationProps {
  props?: any;
  match?: RouteComponentProps;
}

const FromRotation: React.SFC<FromRotationProps> = () => {
  return (
    <div>
      <a>From Rotation</a>
    </div>
  );
};

export default FromRotation;
