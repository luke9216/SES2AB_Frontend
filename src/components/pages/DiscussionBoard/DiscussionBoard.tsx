import * as React from "react";

export interface DiscussionBoardProps {}

const DiscussionBoard: React.SFC = () => {
  return (
    <html>
      
    
      <h1>Discussion Forum</h1>

      <table>
        <tr> 
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
    </html>

  );
};

export default DiscussionBoard;
