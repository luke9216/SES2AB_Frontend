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
  title1: {
    background: "linear-gradient(45deg, #536DFE 30%, #8C9EFF 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(140, 158, 255, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    justifyContent: "center",
    display: "flex",
  },
}));
