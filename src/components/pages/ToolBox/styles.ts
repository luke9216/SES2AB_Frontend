import { makeStyles } from "@material-ui/core/styles";

export const paperStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  circuit: {
    background: "white",
    alignItems: "center",
    marginRight: "40px",
    width: "500px",
    padding: "3em",
  },

  toolBoxFrame: {
    marginLeft: "50px",
    marginRight: "50px",
    border: "solid",
  },
  divTop: {
    top: 10,
    position: "absolute",
    marginTop: "20px",
    marginLeft: "40px",
    marginRight: "50px",
  },
  frame: {
    background: "grey",
    border: "solid",
    marginRight: "40px",
  },
}));
