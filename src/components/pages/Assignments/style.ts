import { makeStyles } from "@material-ui/core/styles";

interface Props {
  color: 'red' | 'blue';
}

export const assignmentStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heading1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  heading2: {
    color: "blue",
  },
  body1: {
    color: "green",
    font: "Serif",
  },
  dueDateBox: {
    background: "red",
    border: "solid",
  },
  title1: {
    background: (props: Props) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props: Props) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
  }
}));
