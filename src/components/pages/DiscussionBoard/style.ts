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
    background: "linear-gradient(45deg, #536DFE 30%, #8C9EFF 90%)",
  },
  rowStyle: {
    color: "darkblue",
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
