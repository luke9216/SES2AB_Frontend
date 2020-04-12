import { makeStyles } from "@material-ui/core/styles";

export const paperStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperColumn: {},
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
