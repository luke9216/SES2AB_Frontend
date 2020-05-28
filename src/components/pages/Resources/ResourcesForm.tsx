import React from "react";
import { Grid } from "@material-ui/core";
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
          <h2 className={classes.title1}>File Title</h2>
          <input type="text" placeholder="Enter title for upload"/>
        </label>

        <label>
        <h2 className={classes.title1}>File</h2>
          <input type="file" name="file"/>
        </label>
        
        <label>
          <h2 className={classes.title1}>Description</h2>
          <textarea className={classes.textarea}></textarea>
        </label>

        <button> Submit </button>
      </Grid>
    </div>
    );
};

export default Resources;
