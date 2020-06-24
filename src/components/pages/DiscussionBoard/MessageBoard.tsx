import * as React from "react";
import ReactDOM from 'react-dom';
import {messageBoardStyles} from "./MessageBoard"

export interface MessageBoardProps {}

const MessageBoard: React.SFC<MessageBoardProps> = () => {
    const classes = messageBoardStyles();

return (
    <div>
        <body>
            <h1 className={classes.title1}>Thread: Progress Report</h1>
            <div> Hello world </div>
        </body>
    </div>
)
}