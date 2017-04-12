export const getErrorsFor = (state, errorField) => {
    return state.errors[errorField] || {};
};

export const getAllTickets = (state) => {
    return state.tickets.all || {};
};

export const getRunningTicketTime = (state, defaul = null) => {
    let ticket = state.tickets.all[state.tickets.started];
    return ticket ? ticket.time : defaul;
};

export const getPlayingTicketId = (state, defaul = null) => {
    return state.tickets.started ? state.tickets.started : defaul;
};

export const getPlayingTicket = (state, defaul = null) => {
    let id = getPlayingTicketId(state, null);
    if(id !== null){
        return state.tickets.all[id];
    }
    return defaul;
};
