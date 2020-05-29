import React from "react";
import { Grid, MenuItem, FormControl, Select, InputLabel, Button } from "@material-ui/core";
import { resourcesStyles } from "./style";

export interface ResourcesFormProps {
  props?: any;
  event?: any;
}


const Resources: React.SFC<ResourcesFormProps> = () => {
  const classes = resourcesStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.div}>
      <Button variant="outlined" className={classes.button} onClick={() => window.history.go(-1)}>Back</Button>
      <div>
        <Grid container direction = "column" justify = "center" alignItems="center">
          <h1 className={classes.title1}>Upload</h1>
            <label>
              <h2 className={classes.title2}>Category</h2>

              <FormControl className={classes.formControl}>
                <InputLabel id="category-label">Categories</InputLabel>

                <Select
                  labelId="category-label"
                  id="category"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"textbook"}>Textbook</MenuItem>
                  <MenuItem value={"lecture"}>Lecture</MenuItem>
                  <MenuItem value={"video"}>Video</MenuItem>
                </Select>
              </FormControl>
            </label>

            <label>
                <h2 className={classes.title2}>File</h2>
                <input type="file" name="file"/>
            </label>
              
            <label>
              <h2 className={classes.title2}>Description</h2>
              <textarea className={classes.textarea}></textarea>
            </label>

            <Button variant="outlined" className={classes.button}>Submit</Button>
        </Grid>
      </div>
    </div>
    );
};

export default Resources;
