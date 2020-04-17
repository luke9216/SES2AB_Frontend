import { makeStyles } from "@material-ui/core/styles";

export const paperStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  text1: {
    color: "blue",
  },

  text2: {
    color: "red",
  },

  toolBoxFrame: {
    marginLeft: "50px",
    marginRight: "50px",
  },
  divBottom: {
    bottom: 10,
    position: "absolute",
    marginBottom: "50px",
    marginLeft: "20px",
  },
  divTop: {
    top: 10,
    position: "absolute",
    marginTop: "20px",
    marginLeft: "20px",
  },
}));
