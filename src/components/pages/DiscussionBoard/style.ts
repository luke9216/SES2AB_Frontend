import { makeStyles } from "@material-ui/core/styles";

export const discussionBoardStyles = makeStyles((theme) => ({
  header: {
    border: "solid",
    background: "grey",
  },
  tableTitle: {
    color: "blue",
    marginLeft: "20px",
  },
  rowStyle: {
    color: "grey",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
