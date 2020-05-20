import * as React from "react";
import { Grid, Button, Tooltip, Paper, makeStyles, createStyles, Theme } from "@material-ui/core";

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
  id: number;
  type: String;
  buttonTab: GateButtonTab

  constructor(id: number, type: String, buttonTab: GateButtonTab) {
    this.id = id;
    this.type = type;
    this.buttonTab = buttonTab;
  }
}

const generateKey = (pre: String) => {
  return `${ pre }_${ new Date().getTime() }`;
}

const GateTypes: React.SFC<GateTypesProps> = ({ gateTypes, handleDragStart }) => {
  var mapKey = 0;
  var formRowCount = 0;
  let map = new Map<number, Gate>();

  function FormRow(map: Map<number, Gate>) {
    return (
      < Grid container item xs={12} spacing={2} >
        {FormBtn(0, map)}
        {FormBtn(1, map)}
      </Grid >
    );
  }

  function FormBtn(id: number, map: Map<number, Gate>) {
    if (typeof map.get(id) !== 'undefined') {
      console.log(map.get(id)!.type)
      return (
        <Grid item xs={6}>
          <div
            className="draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, map.get(id)!.id)}
          >
            <Tooltip title={map.get(id)!.buttonTab.description}>
              <Button key={map.get(id)!.id} variant="contained">
                {map.get(id)!.id}
              </Button>
            </Tooltip>
          </div>
        </Grid>
      )
    }
  }

  return (
    <React.Fragment>
      {gateTypes.map((tab: GateButtonTab, i) => (

        <Grid key={i} item direction="row">
          <h2>{tab.name}</h2>
          {tab.gates.map((gate, gateNumber) => {

            map.set(formRowCount, new Gate(mapKey, gate, tab))
            formRowCount++;
            mapKey++;
            if (formRowCount % 2 === 0) {
              formRowCount = 0;
              return (
                FormRow(map)
              )
              map.clear();
            }
            

          })}
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default GateTypes;
