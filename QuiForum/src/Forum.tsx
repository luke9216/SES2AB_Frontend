import React from 'react';
import ReactDOM from 'react-dom';
import './Forum.css';

import ThreadTable from './ThreadTable';
import Thread from './Thread';


class Forum extends React.Component {
  render() {
    return (
      <div>
	      <table>
	      	<tr>
		      	<div className="forum-header">
			  		<label className="forum-header-header"> Forum: Quick Questions Forum </label>
			  		<br />
			  		<label className="forum-header-additional"> In a thread, you can bview the post and information about it, such as Author and Posted Date. All replies will appear along with the parent post </label>
		  		</div>
	      	</tr>
	      	
	      	<tr>
				<div className="forum-threads">
				    <ThreadTable />
				</div>
	      	</tr>
	      </table>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Forum />,
  document.getElementById('root')
);

export default Forum;