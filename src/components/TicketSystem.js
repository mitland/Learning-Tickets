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

        tickets = tickets.map((ticket) => {
            return (
                <Ticket
                 key={ticket.get['id']}
                 ticket={ticket}
                 handleStart={() => {this.props.startTicketTimer(ticket.get('id'));}}
                 handleDelete={() => {this.props.deleteTicket(ticket.get('id'));}} />
            );
        });

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
                    playingTicket ?
                        <TicketTimer 
                         ticket={playingTicket}
                         handlePlay={() => {this.props.startTicketTimer(playingTicket.get('id'));}}
                         handlePause={() => {this.props.pauseTicketTimer(playingTicket.get('id'));}}
                         handleStop={() => {this.props.stopTicketTimer(playingTicket.get('id'));}}
                         handleTick={() => {this.props.addSecondToTicket(playingTicket.get('id'));}} /> 
                        : null
                }
            </div>
        );
    }
}

export default TicketSystem;
