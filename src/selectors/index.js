import { Map } from 'immutable';

export const getErrorsFor = (state, errorField) => {
    return state.get(['errors', errorField]) || Map();
};

export const getAllTickets = (state) => {
    return state.get(['tickets', 'all']) || Map();
};

export const getRunningTicketTime = (state, defaul = null) => {
    let ticket = state.get(['tickets', 'all', state.get(['tickets', 'started'])]);
    return ticket ? ticket.get('time') : defaul;
};

export const getPlayingTicketId = (state, defaul = null) => {
    return state.get(['tickets', 'started']) ? state.get(['tickets', 'started']) : defaul;
};

export const getPlayingTicket = (state, defaul = null) => {
    let id = getPlayingTicketId(state, null);
    if(id !== null){
        return state.get(['tickets', 'all', id]);
    }
    return defaul;
};
