import * as React from "react";
import {assignmentStyles} from ".style";

export interface AssignmentProps {}

const Assignment: React.SFC = () => {
  return (
    <div>
      <h1>Assignment</h1>
      <Grid>
        <h1>Assignment 1</h1>
      </Grid>
      <Grid>
        <h1>Assignment 2</h1>
      </Grid>
      <Grid>
        <h1>Assignment 3</h1>
      </Grid>
    </div>
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
    </div>
  );
};

export default Assignment;
