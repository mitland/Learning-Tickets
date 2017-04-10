import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TicketForm from '.././components/TicketForm.js';
import SideAddButton from '.././components/SideAddButton.js';

function TicketPopUp({show, handleOpenPopUp, handleClosePopUp, children}) {
	let actions = [
		<FlatButton
	        label="Изключи"
	        primary={true}
	        onClick={handleClosePopUp} />
    ];

	return (
		<div>
			<SideAddButton onClick={handleOpenPopUp} />
	        <Dialog
	        	open={show}
	        	title="Създаване на задача."
	        	actions={actions}
	        	contentStyle={TicketPopUp.style.dialog}
	        	bodyStyle={TicketPopUp.style.dialogContent}
	        	autoScrollBodyContent={true}
	        >
	          	{ children }
	        </Dialog>
	    </div>
	);
}

TicketPopUp.style = {
	dialog: {
		height: '80%',
		backgroundColor: '#4286f4',
		width: '30%'
	},
	dialogContent: {
		margin: '0 auto',
	}
};

TicketPopUp.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOpenPopUp: PropTypes.func.isRequired,
  handleClosePopUp: PropTypes.func.isRequired
};

export default TicketPopUp;