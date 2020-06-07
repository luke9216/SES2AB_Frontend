import { makeStyles } from "@material-ui/core/styles";
import frame from "../../../images/line.png";

export const paperStyles = makeStyles((theme) => ({
  dropCircuit: {
    marginTop: "25px",
    //  border: "solid",
    width: "auto",
    padding: "5em 0 5px ",
  },

  kenTest: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 25%",
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
    textAlign: "center",
    height: "100%",
  },

  submit: {
    color: "white",
    backgroundColor: "#209F20",
    textAlign: "center",
    height: "100%",
  },

  gateBorder: {
    margin: "auto",
  },

  border: {
    marginLeft: "15px",
  },

  do: {
    border: "1px solid black",
    color: "black",
    backgroundColor: "white",
    height: "100%",
  },

  titleGate: {
    color: "black",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },

  button: {
    color: "black",
    backgroundColor: "white",
    width: "8px",
    border: "2px solid black",
    marginRight: "20px",
  },

  divGate: {
    position: "absolute",
    marginBottom: "50px",
    marginLeft: "20px",
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
