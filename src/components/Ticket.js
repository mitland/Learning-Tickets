import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PureComponent from '.././components/PureComponent.js';

const Ticket  = ({ ticket, handleStart, handleDelete }) => {
    return ( 
        <Card style={Ticket.style.card} >
            <CardHeader title={ticket.get('name')} />
            <CardActions style={Ticket.style.priority[ticket.get('priority')]} >
                <FlatButton label="Започни" onClick={handleStart} />
                <FlatButton label="Изтрии" onClick={handleDelete} />
            </CardActions>
        </Card>
    );
};

Ticket.style = {
    card: {
        width: '220px', 
        margin: '15px 15px 0px 15px', 
        float: 'left'
    },
    priority: {
        0: {
            backgroundColor: '#d60c35'
        },
        1: {
            backgroundColor: '#2bdb69'
        }
    }
};

Ticket.propTypes = {
    ticket: PropTypes.shape({
        name: PropTypes.string,
        priority: PropTypes.string
    }).isRequired,
    handleStart: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default PureComponent(Ticket, ['ticket']);
