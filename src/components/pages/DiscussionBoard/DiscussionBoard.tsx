import * as React from "react";
import { discussionBoardStyles } from "./style";
import discussionTitle from "../../common/__data__/data.discussionTitle.json";
import discussionBody from "../../common/__data__/data.discussionBody.json";
import Columns from "./Columns";
import Rows, { IrowBody } from "./Rows";

export interface DiscussionBoardProps {}

const DiscussionBoard: React.SFC = () => {
  const classes = discussionBoardStyles();
  const columnTitles = discussionTitle;
  const rowBody = discussionBody;
  return (
    <div className={classes.header}>
      <body>
        <h1 className={classes.tableTitle}>Discussion Forum</h1>
        <table className={classes.tableStyle}>
          <Columns
            columnTitles={columnTitles}
            classes={discussionBoardStyles()}
          />
          <tbody>
            {rowBody.map((rowBody, i) => (
              <Rows
                key={i}
                rowBody={(rowBody as unknown) as Array<IrowBody>}
                classes={classes}
              />
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
};

export default DiscussionBoard;
