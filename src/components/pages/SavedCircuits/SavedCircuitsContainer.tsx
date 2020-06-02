import * as React from "react";
import SavedCircuits from "./SavedCircuits";
import { paperStyles } from "./harryStyles";
import CircuitList from "../../common/__data__/data.CircuitList.json";

export interface SavedCircuitsContainerProps {}

export interface ICircuits {
  circuitId: string;
  circuit: Array<string>;
}

const SavedCircuitsContainer: React.SFC<SavedCircuitsContainerProps> = () => {
  const [savedCircuitState, setSaved] = React.useState({
    circuitId: "circuit 1",
    circuit: ["1", "2", "3"],
  } as ICircuits);

  return (
    <SavedCircuits
      classes={paperStyles()}
      circuitId={savedCircuitState.circuitId}
      circuits={savedCircuitState.circuit}
    />
  );
};

export default SavedCircuitsContainer;
