import React from "react";
import { Grid, Button } from "@material-ui/core";
import { resourcesStyles } from "./style";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export interface ResourcesProps {}

const Resources: React.SFC<ResourcesProps> = () => {
  const classes = resourcesStyles();

  return (
    <div>
      <h1 className={classes.title1}>TextBooks</h1>
      <div>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>TextBook 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                TEXTBOOK PDF LINK GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>TextBook 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
               TEXTBOOK PDF LINK GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>TextBook 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                TEXTBOOK PDF LINK GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </div>
      <div>
        <Grid>
          <h1 className={classes.title1}>Lectures</h1>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lecture 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                LECTURE GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lecture 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                LECTURE GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lecture 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                LECTURE GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid>
          <h1 className={classes.title1}>Videos</h1>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Video 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                VIDEO LINK GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Video 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                VIDEO LINK GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Video 3</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                VIDEO LINK GOES HERE!
              </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          /** CHANGE TO MAP LATER */

      </div>
    </div>
  );
};

export default Resources;
