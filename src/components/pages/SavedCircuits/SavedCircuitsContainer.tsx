import * as React from "react";
import SavedCircuits, { ICircuitList } from "./SavedCircuits";
import { paperStyles } from "./harryStyles";
import CircuitList from "../../common/__data__/data.CircuitList.json";
import { circuitRetrieve } from "./../../../services/CircuitService";

export interface SavedCircuitsContainerProps {}

export interface ICircuits {
  circuitId: string;
  circuit: Array<string>;
}

export interface ICircuitLists {
  circuitList: Array<ICircuits>;
  index: number;
}

const SavedCircuitsContainer: React.SFC<SavedCircuitsContainerProps> = () => {
  const [retrieve, setRetrieve] = React.useState({
    circuitList: [],
    index: 0,
  } as ICircuitLists);

  const onTest = async (item: any) => {
    console.log(await circuitRetrieve());
  };

  const mapToICircuits = (circuits: any) => {
    let array = [];
    for (const [key, value] of Object.entries(circuits)) {
      let obj = {
        circuitId: key,
        circuit: value as Array<string>,
      };
      array.push(obj);
    }
    // console.log(array);
    setRetrieve({
      ...retrieve,
      circuitList: array,
    });
  };

  let circuits;
  async function loadData() {
    circuits = (await circuitRetrieve()).data;
    mapToICircuits(circuits);
  }

  if (retrieve.index !== 1) {
    loadData();
    setRetrieve({
      ...retrieve,
      index: 1,
    });
  }

  const displayList = retrieve.circuitList || CircuitList;

  return (
    <SavedCircuits
      classes={paperStyles()}
      savedCircuits={displayList as Array<ICircuitList>}
      handleTest={onTest}
    />
  );
};

export default SavedCircuitsContainer;
