import { makeStyles } from "@material-ui/core/styles";

export const resourcesStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  div: {
    padding: "auto auto auto",
    marginLeft: "40%",
    marginRight: "50%",
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
  form: {
    border: "solid",
    width: 600,
    height: "auto",
    marginTop: "5%",
  },

  formControl: {
    display: "flex",
    minWidth: 200,
    margin: "5px 0",
    padding: 1,
  },

  input: {
    display: "block",
    outline: "none",
    borderRadius: "5px",
    borderStyle: "none",
    height: "45px",
    width: "400px",
    padding: "0 16px",
    fontSize: "16px",
    backgroundColor: "rgb(250,250,250)",
    margin: "0 auto",
    border: "solid",
  },

  title1: {
    background: "linear-gradient(45deg, #536DFE 30%, #8C9EFF 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(140, 158, 255, .3)",
    color: "white",
    width: 500,
    height: 48,
    padding: "0 30px",
    justifyContent: "center",
    display: "flex",
  },

  title2: {
    background: "white",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "#536DFE",
    width: 500,
    height: 38,
    padding: "0 30px",
    justifyContent: "center",
    display: "flex",
  },

  title3: {
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

  textarea: {
    border: "2px solid #999999",
    width: 500,
    height: 200,
    margin: "5px 0",
    padding: 1,
  },
}));
