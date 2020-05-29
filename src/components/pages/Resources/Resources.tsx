import React from "react";
import { Grid, Button } from "@material-ui/core";
import { resourcesStyles } from "./style";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { resourceUpload } from '../../../services/ResourceService';
import { toast } from "react-toastify";

export interface ResourcesProps {}

const Resources: React.SFC<ResourcesProps> = () => {
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
      <Button variant="outlined" className={classes.button} href="/resources/upload">Upload a resource</Button>
      <div>
        <h1 className={classes.title3}>TextBooks</h1>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>TextBook 1</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>TEXTBOOK PDF LINK GOES HERE!</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>TextBook 2</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>TEXTBOOK PDF LINK GOES HERE!</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>TextBook 3</Typography>
            </ExpansionPanelSummary>
            
            <ExpansionPanelDetails>
              <Typography>TEXTBOOK PDF LINK GOES HERE!</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </div>

      <div>
        <h1 className={classes.title3}>Lectures</h1>

        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lecture 1</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>LECTURE GOES HERE!</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography>Lecture 2</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>LECTURE GOES HERE!</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lecture 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>LECTURE GOES HERE!</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </div>

      <div>
          <h1 className={classes.title3}>Videos</h1>
          <Grid>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Video 1</Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <Typography>VIDEO LINK GOES HERE!</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Video 2</Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <Typography>VIDEO LINK GOES HERE!</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Video 3</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>VIDEO LINK GOES HERE!</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
      </div>
    </div>
  );
};

export default Resources;
