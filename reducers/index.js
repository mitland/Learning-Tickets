import { combineReducers } from 'redux';
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
}

const validationFailure = (state = {}, action) => {
	let newState = { ...state };
	switch(action.type) {
		case types.CLOSE_TICKET_MODAL:
			newState[constants.TICKET_MODAL_ERRORS] = undefined;
			return newState;
		case types.VALIDATE_FAILURE:
			newState[action.name] = action.errors;
			return newState;
		default:
			return state;
	}	
}

export default combineReducers({
	tickets,
	creatingTicket: ticketModal,
	errors: validationFailure
});