import { combineReducers } from 'redux-immutable';
import { Map, fromJS } from 'immutable';
import * as constants from '../constants.js';
import { tickets } from './tickets.js';
import * as types from '../actionTypes';

const ticketModal = (state = false, action) => {
    switch(action.type) {
        case types.SHOW_TICKET_MODAL:
            return true;
        case types.CLOSE_TICKET_MODAL:
            return false;
        default:
            return state;
    }
};

const validationFailure = (state = Map(), action) => {
    switch(action.type) {
        case types.CLOSE_TICKET_MODAL:
            return state.delete(constants.TICKET_MODAL_ERRORS);
        case types.VALIDATE_FAILURE:
            return state.set(action.name, fromJS(action.errors));
        default:
            return state;
    }   
};

export default combineReducers({
    tickets,
    creatingTicket: ticketModal,
    errors: validationFailure
});
