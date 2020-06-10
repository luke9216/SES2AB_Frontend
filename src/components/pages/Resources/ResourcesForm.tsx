import React from "react";
import {
  Grid,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@material-ui/core";
import { resourcesStyles } from "./style";
import { resourceUpload } from "../../../services/ResourceService";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

export interface ResourcesFormProps {
  props?: any;
  event?: any;
}

export interface Iresource {
  category: string;
  file: FileList;
  description: string;
}

const Resources: React.SFC<ResourcesFormProps> = () => {
  const classes = resourcesStyles();
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [resource, setResource] = React.useState(({
    category: "",
    file: null,
    description: "",
  } as unknown) as Iresource);

  const handleChange = (event: any) => {
    setResource({
      ...resource,
      category: event.target.value,
    });
  };

  const handleTextChange = (event: any) => {
    setResource({
      ...resource,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onChangeHandler = (event: any) => {
    setResource({
      ...resource,
      file: event?.target.files[0],
    });
    console.log(event?.target.files[0]);
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
    console.log(resource);
    //setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/resources" />;
  }
  return (
    <div className={classes.div}>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => window.history.go(-1)}
      >
        Back
      </Button>
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.form}
        >
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
                value={resource.category}
                onChange={handleChange}
              >
                <MenuItem value={"textbook"}>Textbook</MenuItem>
                <MenuItem value={"lecture"}>Lecture</MenuItem>
                <MenuItem value={"video"}>Video</MenuItem>
              </Select>
            </FormControl>
          </label>

          <label>
            <h2 className={classes.title2}>File</h2>
            <input
              className={classes.input}
              type="file"
              name="file"
              id="resource"
              onChange={onChangeHandler}
            />
          </label>

          <label>
            <h2 className={classes.title2}>Description</h2>
            <textarea
              className={classes.textarea}
              name="description"
              onChange={handleTextChange}
            ></textarea>
          </label>
          <Button
            variant="outlined"
            onClick={onSubmit}
            className={classes.button}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Resources;
