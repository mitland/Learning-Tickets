import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Timer from '.././components/Timer.js';
import { secondsToHMS } from '../helpers.js';
import Chip from 'material-ui/Chip';

const TicketTimer  = ({ ticket, handleStop, handlePlay, handlePause, handleTick }) => {
	let actionButton = ticket.state == 'playing' ?
		<i className="fa fa-pause" onClick={handlePause}></i> :
		<i className="fa fa-play" onClick={handlePlay}></i>;

	return (
		<div style={TicketTimer.style.chip}>
			<span style={TicketTimer.style.title}>{ticket.name}</span>
			<Chip >
	          <Timer state={ticket.state} handleTick={handleTick} time={secondsToHMS(ticket.time)} />
	          {"  "}
	          <span style={{ height:'100%', borderLeft:'1px solid black', marginRight:'5px'}}></span>
	          { actionButton }
	          {"  "}
	          <i className="fa fa-times" onClick={handleStop}></i>
	        </Chip>
	    </div> 
	);
}

TicketTimer.propTypes = {
	ticket: PropTypes.shape({
	    name: PropTypes.string,
	    time: PropTypes.number,
	    priority: PropTypes.string
	}).isRequired,
	handlePlay: PropTypes.func.isRequired,
	handlePause: PropTypes.func.isRequired,
	handleStop: PropTypes.func.isRequired,
	handleTick: PropTypes.func.isRequired,
};

TicketTimer.style = {
	chip: {
		position: 'fixed',
		right: '1%',
		top: '15%',
		backgroundColor: 'rgb(0, 188, 212)',
    	borderRadius: '25%',
    	textAlign: 'center'
	}
};

export default TicketTimer;