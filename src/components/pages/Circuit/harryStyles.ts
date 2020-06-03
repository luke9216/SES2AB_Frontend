import { makeStyles } from "@material-ui/core/styles";
import frame from "../../../images/line.png";

export const paperStyles = makeStyles((theme) => ({
         circuit: {
           background: "#bdbdbd",
           border: "solid",  
           marginRight: "40px",
           width: "1005px",
           padding: "10em 0 30px",
           backgroundImage: "-",
         },
         circuitFrame: {
          marginRight: "40px",
          width: "100",
          padding: "0.5em 0 30px",
         },
          kenTest: {
          width: "10",
          height: "30",
          padding: "13em 10 30px",
          backgroundImage: `url(${frame})`,
          backgroundPosition: 'center',
        },

         circuitGates: {
           background: "#BBDEFB",
           border: "solid",
           marginRight: "40px",
           width: "1000px",
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
         clear: {
           color: "white",
           backgroundColor: "#FF3220",
           textAlign: "center",
           margin: "auto",
         },

         submit: {
           color: "white",
           backgroundColor: "#209F20",
           margin: "auto",
         },

         gateBorder: {
           margin: "auto",
         },

         border: {
           marginLeft: "15px",
         },

         do: {
           border: "1px solid black",
           color: "black",
           marginLeft: "5px",
           backgroundColor: "white",
           margin: "auto",
         },

         titleGate: {
           color: "black",
           padding: "0 30px",
           justifyContent: "center",
           marginLeft: "15px",
           display: "flex",
         },

         button: {
           color: "black",
           backgroundColor: "white",
           width: "8px",
           border: "2px solid black",
           marginRight: "20px",
         },

         divGate: {
           position: "absolute",
           marginBottom: "50px",
           marginLeft: "20px",
         },

         divBottom: {
           bottom: 10,
           position: "absolute",
           marginBottom: "50px",
           marginLeft: "20px",
         },
         divTop: {
           top: 1,
           position: "relative",
           marginTop: "20px",
           marginLeft: "40px",
           marginBottom: "50px",
         },
       }));

