import * as types from '../actionTypes';
import { getRunningTicketId } from '.././selectors/index.js';
import { v4 } from 'node-uuid';

export function addSecondToTicket(id){
	return {
		type: types.ADD_SECOND_TO_TICKET,
		id: id
	}
}

export function pauseTicketTimer(id){
	return {
		type: types.PAUSE_TICKET_TIMER,
		id,
		state: 'paused'
	}
}

export function stopTicketTimer(id){
	return {
		type: types.STOP_TICKET_TIMER,
		id,
		state: 'stopped'
	}
}

export function startTicketTimer(id){
	return {
		type: types.START_TICKET_TIMER,
		id,
		state: 'playing'
	}
}

export function showTicketPopUp(){
	return {
		type: types.SHOW_TICKET_MODAL
	}
}

export function closeTicketPopUp(){
	return {
		type: types.CLOSE_TICKET_MODAL
	}
}

export function createTicket({ name, priority }){
	console.log(priority);
	return {
		type: types.CREATE_TICKET,
		id: v4(),
		name: name,
		priority: priority || 0,
		time: 0,
		state: 'stopped'
	}
}

export function validateFieldsFailure(name, errors){
	return {
		type: types.VALIDATE_FAILURE,
		name,
		errors
	}
}

export function deleteTicket(id){
	return {
		type: types.DELETE_TICKET,
		id
	}
}
