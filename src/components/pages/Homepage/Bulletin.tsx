import * as React from "react";
import { Grid } from "@material-ui/core";

export interface BulletinProps {}

const Bulletin: React.SFC<BulletinProps> = () => {
  return (
    <div>
      <h1>This is the Bulletin Module</h1>
      <Grid container>
        <h2>Heres what's new!</h2>
      </Grid>
    </div>
  );
};

export default Bulletin;
