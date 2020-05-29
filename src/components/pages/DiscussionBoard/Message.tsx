import React from 'react';
import ReactDOM from 'react-dom';
import './Message.css';
import {Editor}  from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import userIcon from '../../../images/userIcon.png';

const items = [
	{
		src: {userIcon}
	}
]
class Message extends React.Component {
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
    	  <div>
				<div className="Title">
					<label className="forum-header-header"> Thread: Progress Report  </label>
					<br /> 
					<br />

				</div>
	
    	  		<fieldset className="fs-thread-description">
    	  			<legend>FORUM DESCRIPTION</legend>
					  <img src={userIcon} className="userIcon"/> 
					<label className="Message-Header1"> Patricia Deocamp </label>
					<br /> 
					<label className="Message-Header2"> Progress Report </label>
					
					<br />
					<br />
					<label className="Messahe-Header1"> Hi, <br /> <br /> I can't seem to find the template for the progress report on UTS Online. What should we include in the progress report due in week 8? <br /> <br /> Thank you in advance! </label>
					<br />
					<br />
					<br />
					<textarea className="textArea"> Comment here </textarea>
    	  			
    	  		</fieldset>

    	  		<fieldset className="fs-thread-message">
		  			<legend>MESSAGE</legend>
		  			<div className="div-thread-subject">
			  			<label>Subject</label>
			  			<input type="text"></input>
		  			</div>
		  			
		  			<div className="div-thread-message">
		  				<label>Message</label>
		  				<br />
	  					<Editor
		  				  toolbarClassName="toolbarClassName"
		  				  wrapperClassName="wrapperClassName"
		  				  editorClassName="editorClassName"
		  				/>		  			
		  			</div>
  				</fieldset>
  				
    	  		<fieldset className="fs-thread-attachments">
		  			<legend>ATTACHMENTS</legend>
		  			<div className="div-thread-subject">
		  				<label>Attach File</label>
		  				<button className="btn-attach-file">Browse my Computer</button>
	  			</div>
	  			</fieldset>
	  		

    	  </div>
       )
   }
}

export default Message

