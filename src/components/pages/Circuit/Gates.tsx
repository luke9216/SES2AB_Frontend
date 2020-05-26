import * as React from "react";
import {
  Grid,
  Button,
  Tooltip,
  Paper,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

interface GateTypesProps {
  gateTypes: Array<GateButtonTab>;
  handleDragStart: Function;
}

export interface GateButtonTab {
  name: string;
  gates: Array<String>;
  description: string;
  category: string;
}

class Gate {
  type: String;
  buttonTab: GateButtonTab;

  constructor(type: String, buttonTab: GateButtonTab) {
    this.type = type;
    this.buttonTab = buttonTab;
  }
}

const generateKey = (pre: String) => {
  return `${pre}_${new Date().getTime()}`;
};

const GateTypes: React.SFC<GateTypesProps> = ({
  gateTypes,
  handleDragStart,
}) => {
  var gate1 = new String();
  var gate2 = new String();
  var formRowCount = 0;
  let map = new Map<number, Gate>();

  function FormRow(gate1: String, gate2: String, map: Map<number, Gate>) {
    return (
      <Grid container item xs={12} spacing={2}>
        {FormBtn(gate1, 0, map)}
        {FormBtn(gate2, 1, map)}
      </Grid>
    );
  }

  function FormBtn(gate: String, id: number, map: Map<number, Gate>) {
    if (typeof map.get(id) !== "undefined") {
      return (
        <Grid item xs={6}>
          <div
            className="draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, gate)}
          >
            <Tooltip title={map.get(id)!.buttonTab.description}>
              <Button key={generateKey(gate)} variant="contained">
                {map.get(id)!.type}
              </Button>
            </Tooltip>
          </div>
        </Grid>
      );
    }
  }

  return (
    <React.Fragment>
      {gateTypes.map((tab: GateButtonTab, i) => (
        <Grid key={i} item direction="row">
          <h2>{tab.name}</h2>
          {tab.gates.map((gate, gateNumber) => {
            if (formRowCount == 0) {
              gate1 = gate;
            } else {
              gate2 = gate;
            }
            map.set(formRowCount, new Gate(gate, tab));
            formRowCount++;
            if (formRowCount % 2 === 0) {
              formRowCount = 0;
              return FormRow(gate1, gate2, map);
              map.clear();
            }
          })}
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default GateTypes;
