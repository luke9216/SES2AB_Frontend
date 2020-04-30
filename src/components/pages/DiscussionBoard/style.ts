import { makeStyles } from "@material-ui/core/styles";

export const discussionBoardStyles = makeStyles((theme) => ({
  header: {
    border: "solid",
    background: "white",
  },
  tableTitle: {
    color: "white",
    marginLeft: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "darkmagenta",
  },
  rowStyle: {
    color: "darkmagenta",
    background: "gainsboro",
  },
  tableStyle: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
