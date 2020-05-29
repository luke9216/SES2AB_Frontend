import React from "react";
import { Grid, TextField, MenuItem } from "@material-ui/core";
import { resourcesStyles } from "./style";

export interface ResourcesFormProps {
  
}


const Resources: React.SFC<ResourcesFormProps> = () => {

  

  const classes = resourcesStyles();

  return (
    <div>
      <h1 className={classes.title1}>Upload Form</h1>
      
      <Grid container direction = "column" justify = "center" alignItems="center">
          <label>
            <h2 className={classes.title1}>Category</h2>

            <TextField id="select" fullWidth={true} value="textbook" select>
              <MenuItem value="textbook">Textbook</MenuItem>
              <MenuItem value="lectures">Lectures</MenuItem>
              <MenuItem value="videos">Videos</MenuItem>
            </TextField>
          </label>

          <label>
            <h2 className={classes.title1}>File</h2>

            <input type="file" name="file"/>
          </label>
            
          <label>
            <h2 className={classes.title1}>Description</h2>

            <textarea className={classes.textarea}></textarea>
          </label>

          <button>Submit</button>
      </Grid>
    </div>
    );
};

export default Resources;
