import * as React from "react";
import { discussionBoardStyles } from "./style";

export interface DiscussionBoardProps {}

const DiscussionBoard: React.SFC = () => {
  const classes = discussionBoardStyles();
  return (
    <div className={classes.header}>
      <body>
        <h1 className={classes.tableTitle}>Discussion Forum</h1>
        <table className={classes.tableStyle}>
          <tr className={classes.rowStyle}>
            <th>Discussion topic</th>
            <th>Replies</th>
            <th>Last Post</th>
            <th>First Post</th>
          </tr>
          <tbody>
            <tr>
              <th>Discussion1</th>
              <th>User 1 Test</th>
              <th>28th Apr</th>
              <th>Today 3:05pm</th>
            </tr>
            <tr className={classes.rowStyle}>
              <th>Discussion1</th>
              <th>User1 Test</th>
              <th>28th Apr</th>
              <th>Today 3:05pm</th>
            </tr>
            <tr>
              <th>Discussion1</th>
              <th>User1 Test</th>
              <th>28th Apr</th>
              <th>Today 3:05pm</th>
            </tr>
            <tr className={classes.rowStyle}>
              <th>Discussion1</th>
              <th>User1 Test</th>
              <th>28th Apr</th>
              <th>Today 3:05pm</th>
            </tr>
            <tr>
              <th>Discussion1</th>
              <th>User1 Test</th>
              <th>28th Apr</th>
              <th>Today 3:05pm</th>
            </tr>
          
          </tbody>
         
        </table>
      </body>
    </div>
  );
};


export default DiscussionBoard;
