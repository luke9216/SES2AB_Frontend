import * as React from "react";

export interface RowsProps {
  rowBody: Array<IrowBody>;
  classes: any;
}

export interface IrowBody {
  discussionTopic: string;
  replies: string;
  lastPost: string;
  firstPost: string;
}

const Rows: React.SFC<RowsProps> = ({ rowBody, classes }) => {
  return (
    <tr>
      {rowBody.map((tab: IrowBody, i) => {
        <th>{tab.replies}</th>;
      })}
    </tr>
  );
};

export default Rows;
