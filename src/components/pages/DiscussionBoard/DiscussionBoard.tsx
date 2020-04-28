import * as React from "react";
import { discussionBoardStyles } from "./style";

export interface DiscussionBoardProps {}

const DiscussionBoard: React.SFC = () => {
  const classes = discussionBoardStyles();
  return (
    <div className={classes.header}>
      <head className={classes.tableTitle}>This the title of the forums</head>
      <body>
        <h1>Discussion Forum</h1>
        <table>
          <tr className={classes.rowStyle}>
            <th>Discussion topic</th>
            <th>Replies</th>
            <th>Last Post</th>
          </tr>
          <tr>
            <th>Discussion1</th>
            <th>User1</th>
            <th>28th Apr</th>
          </tr>
        </table>
      </body>
    </div>
  );
};

export default DiscussionBoard;
