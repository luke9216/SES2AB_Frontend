import { makeStyles } from "@material-ui/core/styles";

export const assignmentStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heading1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  button: {
    color: "white",
    backgroundColor: "#536DFE",
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

  toolbox: {
    background: "rgb(176,176,176)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(140, 158, 255, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    justifyContent: "left",
    display: "flex",
  },

  iconstyle: {
    color: "white",
    marginTop: "auto",
    marginBottom: "auto",
  },

  FormBackground: {
    color: "white",
    marginTop: "auto",
    marginBottom: "auto",
  },

  Buttonlocation: {
    justifyContent: "center",
    display: "flex",
  },
}));
