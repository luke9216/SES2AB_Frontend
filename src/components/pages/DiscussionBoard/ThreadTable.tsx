import React from 'react';
import './ThreadTable.css';


class ThreadTable extends React.Component<any, any> {
   constructor(props: any) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         threads: [
            { date: '27/04/2020 9:30PM', threadName: 'Progress Report', author: 'Student 1', status: 'Published', "UnReadPosts": '10', "RepliesToMe": 21, "TotalPosts": '10' },
            { date: '27/04/2020 9:30PM', threadName: 'Lecture Recording', author: 'Student 1', status: 'Published', "UnReadPosts": '0', "RepliesToMe": 21, "TotalPosts": '10'},
            { date: '27/04/2020 9:30PM', threadName: 'Mini-Cases', author: 'Student 1', status: 'Published', "UnReadPosts": '0', "RepliesToMe": 21, "TotalPosts": '10' },
            { date: '27/04/2020 9:30PM', threadName: 'Lecture 2', author: 'Student 1', status: 'Published', "UnReadPosts": '4', "RepliesToMe": 21, "TotalPosts": '10'}
         ]
      }
   }

   renderTableData() {
		interface Thread {
			date: String;
			threadName: string;
			author: string;
			status: string;
			UnReadPosts: string;
			RepliesToMe: string;
			TotalPosts: string;	
		};
	
      return this.state.threads.map((thread: Thread, index: any) => {
         const { date, threadName, author, status, UnReadPosts, RepliesToMe, TotalPosts} = thread //destructuring
         return (
            <tr>
               <td >{date}</td>
               <td><a className="thread" href="/createmessage"> {threadName}</a></td>
               <td>{author}</td>
               <td>{status}</td>
               <td>{UnReadPosts}</td>
               <td>{RepliesToMe}</td>
               <td>{TotalPosts}</td>
            </tr>
         )
      })
   }
   
   renderTableHeader() {
      let header = Object.keys(this.state.threads[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
		  <div>
		  	<div className="forum-thread-toolbar">
		  		<a className="forum-thread-toolbar-link" href="/createthread">Create Thread</a>
		  		<a className="forum-thread-toolbar-link" href=""> Subscribe</a>		  		
		  	</div>
		  
		  	<table id='threads'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
       )
   }
}

export default ThreadTable //exporting a component make it reusable and this is the beauty of react