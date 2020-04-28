import { makeStyles } from "@material-ui/core/styles";

export const assignmentStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heading1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  heading2: {
    color: "blue",
  },
  body1: {
    color: "green",
    font: "Serif",
  },
  dueDateBox: {
    background: "red",
    border: "solid",
  },
}));
