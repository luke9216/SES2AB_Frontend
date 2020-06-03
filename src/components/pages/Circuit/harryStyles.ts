import { makeStyles } from "@material-ui/core/styles";

export const paperStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  circuit: {
    background: "white",
    border: "solid",
    marginRight: "40px",
    width: "1000px",
    padding: "10em 0 30px",
  },
  circuitGates: {
    background: "#BBDEFB",
    border: "solid",
    marginRight: "40px",
    width: "1000px",
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

  clear: {
    color: "white",
    backgroundColor: "#FF3220",
  },

  submit: {
    color: "black",
    backgroundColor: "#69f0ae",
    border: "solid",
  },

  CircuitBoxFrame: {
    hight: "10px",
    width: "10px",
    bottom: 10,
    position: "absolute",
    marginBottom: "50px",
    marginLeft: "20px",
    background: "#5F9EA0",
  },
  divBottom: {
    bottom: 10,
    position: "absolute",
    marginBottom: "50px",
    marginLeft: "20px",
  },
  divTop: {
    top: 1,
    position: "relative",
    marginTop: "20px",
    marginLeft: "40px",
    marginBottom: "50px",
  },
}));
