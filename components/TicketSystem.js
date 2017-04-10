import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Ticket from '.././components/Ticket.js';
import TicketPopUp from '.././components/TicketPopUp.js';
import TicketForm from '.././components/TicketForm.js';
import TicketTimer from '.././components/TicketTimer.js';
import AppBar from 'material-ui/AppBar';

class TicketSystem extends Component {
	render() {
		let { playingTicket, tickets } = this.props;
		
		tickets = Object.keys(tickets).map((id) => {
				return (<Ticket 
							key={tickets[id].id} 
							ticket={tickets[id]} 
							handleStart={() => {this.props.startTicketTimer(id)}}
							handleDelete={() => {this.props.deleteTicket(id)}} />)
		})

		return (
			<div>
				<AppBar title="Tickets" />
				{tickets}
				<TicketPopUp
						show={this.props.creatingTicket} 
						handleClosePopUp={this.props.closeTicketPopUp}
						handleOpenPopUp={this.props.showTicketPopUp}>
					<TicketForm />
				</TicketPopUp>
				{ 
					playingTicket ? <TicketTimer 
						ticket={playingTicket}
						handlePlay={() => {this.props.startTicketTimer(playingTicket.id)}}
						handlePause={() => {this.props.pauseTicketTimer(playingTicket.id)}}
						handleStop={() => {this.props.stopTicketTimer(playingTicket.id)}}
						handleTick={() => {this.props.addSecondToTicket(playingTicket.id)}} /> 
					: null
				}
			</div>
		);
	}
}

export default TicketSystem;