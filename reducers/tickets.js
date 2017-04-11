import * as types from '../actionTypes';
import { changeObjectState, coppyObjectState } from '../helpers.js';
import { combineReducers } from 'redux';

const ticket = (state, action) => {
    switch(action.type) {
        case types.CREATE_TICKET:
            return {
                id: action.id,
                name: action.name,
                priority: action.priority,
                time: action.time,
                state: action.state
            };
        case types.START_TICKET_TIMER:
        case types.STOP_TICKET_TIMER:
        case types.PAUSE_TICKET_TIMER:
        case types.FINISH_TICKET:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                state: action.state,
            };
        case types.ADD_SECOND_TO_TICKET:
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                time: state.time + 1,
            };
        default:
            return state;
    }
};

const all = (state = {}, action) => {
    switch(action.type) {
        case types.CREATE_TICKET:
            return {
                ...state,
                [action.id]: ticket(undefined, action)
            };
        case types.DELETE_TICKET:
            let newState = {...state};
            delete newState[action.id];
            return newState;
        case types.START_TICKET_TIMER:
        case types.STOP_TICKET_TIMER:
        case types.PAUSE_TICKET_TIMER:
        case types.FINISH_TICKET:
        case types.ADD_SECOND_TO_TICKET:
            return {
                ...state,
                [action.id]: ticket(state[action.id], action)
            };
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
