import React from 'react';
import ReactDOM from 'react-dom';
import './Message.css';
import {Editor}  from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import userIcon from '../../../images/userIcon.png';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from '@material-ui/core';


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
    	  			
					  <img src={userIcon} className="userIcon"/> 
					<label className="Message-Header1"> Patricia Deocamp </label>
					<br /> 
					<label className="Message-Header2"> Progress Report </label>
					
					<br />
					<br />
					<label className="Messahe-Header1"> Hi, <br /> <br /> I can't seem to find the template for the progress report on UTS Online. What should we include in the progress report due in week 8? <br /> <br /> Thank you in advance! </label>
					<br />
					<br />
						<ExpansionPanel>
							<ExpansionPanelSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							  >
							<Typography> Reply </Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Typography>
								<div className="div-thread-message">
		  				<br />
	  					<Editor
		  				  toolbarClassName="toolbarClassName"
		  				  wrapperClassName="wrapperClassName"
							editorClassName="editorClassName"
		  				/>		  			
		  			</div>
					  <br/>
					  <br/>
					  <div className="div-thread-subject">
		  				<label>Attach File</label>
		  				<button className="btn-attach-file">Browse my Computer</button>
	  			</div>
					  
					  	<p>
							  <Button variant="outlined" color="primary"> Submit </Button>
						  </p>
					  		
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
				
    	  		</fieldset>
    	  </div>
       )
   }
}

export default Message

