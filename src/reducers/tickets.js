import * as types from '../actionTypes';
import { Map } from 'immutable';
import { changeObjectState, coppyObjectState } from '../helpers.js';
import { combineReducers } from 'redux-immutable';

const ticket = (state, action) => {
    switch(action.type) {
        case types.CREATE_TICKET:
            return Map({
                id: action.id,
                name: action.name,
                priority: action.priority,
                time: action.time,
                state: action.state
            });
        case types.START_TICKET_TIMER:
        case types.STOP_TICKET_TIMER:
        case types.PAUSE_TICKET_TIMER:
        case types.FINISH_TICKET:
            if (state.get('id') !== action.id) {
                return state;
            }
            return state.set('state', action.state); 
        case types.ADD_SECOND_TO_TICKET:
            if (state.get('id') !== action.id) {
                return state;
            }
            return state.update('time', time => time + 1); 
        default:
            return state;
    }
};

const all = (state = Map(), action) => {
    switch(action.type) {
        case types.CREATE_TICKET:
            return state.set(action.id, ticket(undefined, action));
        case types.DELETE_TICKET:
            return state.delete(action.id);
        case types.START_TICKET_TIMER:
        case types.STOP_TICKET_TIMER:
        case types.PAUSE_TICKET_TIMER:
        case types.FINISH_TICKET:
        case types.ADD_SECOND_TO_TICKET:
            return state.set(action.id, ticket(state.get(action.id), action));
        default:
            return state;
    }
};

const started = (state = 0, action) => {
    switch(action.type) {
        case types.START_TICKET_TIMER:
            return action.id;
        case types.DELETE_TICKET:
            return state === action.id ? 0 : state;
        case types.STOP_TICKET_TIMER:
            return 0;
        default:
            return state;
    }
};

export const tickets = combineReducers({ all, started });
