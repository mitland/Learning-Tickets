import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import { getAllTickets, getPlayingTicket } from '../selectors/index.js';
import TicketSystem from '.././components/TicketSystem.js';

function mapStateToProps (state) {
    return {
        tickets: getAllTickets(state),
        creatingTicket: state.creatingTicket,
        playingTicket: getPlayingTicket(state),
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketSystem);
