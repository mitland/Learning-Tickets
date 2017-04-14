import { Map } from 'immutable';

export const getErrorsFor = (state, errorField) => {
    return state.getIn(['errors', errorField]) || Map();
};

export const getCreatingTicket = (state) => {
    return state.get('creatingTicket') || false;
};

export const getAllTickets = (state) => {
    return state.getIn(['tickets', 'all']) || Map();
};

export const getRunningTicketTime = (state, defaul = null) => {
    let ticket = state.getIn(['tickets', 'all', state.getIn(['tickets', 'started'])]);
    return ticket ? ticket.getIn('time') : defaul;
};

export const getPlayingTicketId = (state, defaul = null) => {
    return state.getIn(['tickets', 'started']) ? state.getIn(['tickets', 'started']) : defaul;
};

export const getPlayingTicket = (state, defaul = null) => {
    let id = getPlayingTicketId(state, null);
    if(id !== null){
        return state.getIn(['tickets', 'all', id]);
    }
    return defaul;
};
