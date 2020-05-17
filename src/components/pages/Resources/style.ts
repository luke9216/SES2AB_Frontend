import { makeStyles } from "@material-ui/core/styles";

export const resourcesStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    heading1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
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

    textarea: {
        border:"2px solid #999999",
        width:500,
        height: 200,
        margin:"5px 0",
        padding:1,
    },
}));