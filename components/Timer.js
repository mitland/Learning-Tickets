import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
    componentDidMount() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        if(Timer.constants.PAUSED !== this.props.state) {
            this.props.handleTick();
        }
    }

    render() {
        return (
            <span>{ this.props.time }</span>
        )
    }
}

Timer.constants = {
    PAUSED: 'paused',
}

Timer.propTypes = {
    time:       PropTypes.any.isRequired,
    state:      PropTypes.string.isRequired,
    handleTick: PropTypes.func.isRequired
};

export default Timer;