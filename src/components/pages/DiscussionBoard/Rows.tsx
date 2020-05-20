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
    <h1>er</h1>
  );
};

export default Rows;
