import { makeStyles } from "@material-ui/core/styles";

export const paperStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
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
  title2: {
    background: "linear-gradient(45deg, #536DFE 30%, #8C9EFF 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(140, 158, 255, .3)",
    color: "white",
    height: 40,
    padding: "0 30px",
    justifyContent: "center",
    display: "flex",
  },
}));
