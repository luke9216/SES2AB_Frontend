import { makeStyles } from "@material-ui/core/styles";

export const assignmentStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heading1: {
    color: "blue",
  },
  heading2: {
    color: "",
  },
  dueDateBox: {
    background: "red",
    border: "solid",
  },
}));
