import { discussionBoardStyles } from "./style";
import * as React from "react";

export interface ColumnsProps {
  columnTitles: Array<IdicussionBoard>;
  classes: any;
}

export interface IdicussionBoard {
  columnTitle: string;
}

const Columns: React.SFC<ColumnsProps> = ({ columnTitles, classes }) => {
  return (
    <tr className={classes.rowStyle}>
      {columnTitles.map((tab: IdicussionBoard) => (
        <th>{tab.columnTitle}</th>
      ))}
    </tr>
  );
};

export default Columns;
