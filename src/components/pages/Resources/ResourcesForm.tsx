import React from "react";
import { Grid, MenuItem, FormControl, Select, InputLabel, Button } from "@material-ui/core";
import { resourcesStyles } from "./style";
import { resourceUpload } from '../../../services/ResourceService';
import { toast } from "react-toastify";

export interface ResourcesFormProps {
  props?: any;
  event?: any;
}


const Resources: React.SFC<ResourcesFormProps> = () => {
  const classes = resourcesStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const onChange = (event: any) => {
    setAge(event.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onChangeHandler = (event: any) => {
    console.log(event?.target.files[0])
  };

  const onSubmit = (event: any) => {
    // resourceUpload("hello", "world").then((response) => {
    //   if (response.status === 200) {
    //     console.log("success:", response.data);
    //   } else {
    //     toast.error("An error occured. Please try again later");
    //     console.log(response);
    //   }
    // });
  };

  return (
  <div>
    <div>
    <Grid container direction = "column" justify = "center" alignItems="center">
    <Button variant="outlined" className={classes.back} onClick={() => window.history.go(-1)}>Back</Button>
        <h1 className={classes.title1}>Upload</h1>
        <label>
          <h2 className={classes.title2}>Category</h2>

          <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Categories</InputLabel>

            <Select
              labelId="category-label"
              id="category"
              open={open}
              onClose={onClose}
              onOpen={onOpen}
              value={age}
              onChange={onChange}
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
            <input className={classes.input} type="file" name="file" onChange={onChangeHandler}/>
        </label>
          
        <label>
          <h2 className={classes.title2}>Description</h2>
          <textarea className={classes.textarea}></textarea>
        </label>
        <Button variant="outlined" onClick={onSubmit} className={classes.button}>Submit</Button>
    </Grid>
    </div>
  </div>
    );
};

export default Resources;
