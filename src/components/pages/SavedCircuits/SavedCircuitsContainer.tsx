import * as React from "react";
import SavedCircuits, { ICircuitList } from "./SavedCircuits";
import { paperStyles } from "./harryStyles";
import CircuitList from "../../common/__data__/data.CircuitList.json";

export interface SavedCircuitsContainerProps {}

export interface ICircuits {
  circuitId: string;
  circuit: Array<string>;
}

const onTest = (item: any) => {
  console.log(item);
};

const SavedCircuitsContainer: React.SFC<SavedCircuitsContainerProps> = () => {
  return (
    <SavedCircuits
      classes={paperStyles()}
      savedCircuits={CircuitList as Array<ICircuitList>}
      handleTest={onTest}
    />
  );
};

export default SavedCircuitsContainer;
