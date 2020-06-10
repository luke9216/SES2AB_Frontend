import { makeStyles } from "@material-ui/core/styles";

export const loginStyles = makeStyles((theme) => ({
    root: {
        color: "red",
    },
    heading: {
        color: "black",
    },
    loginForm: {
        color: "grey",
        display: "inline-block"
    },
    divForm: {
        display: "block",
        position: "relative",
        width: "30%",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        color: "grey",
        background: "#cecece",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    loginBtn: {
        // width: "30%",
        margin: theme.spacing(3, 0, 2),
    },
}));

export const signupStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    signupBtn: {
        margin: theme.spacing(3, 0, 2),
    },
}));