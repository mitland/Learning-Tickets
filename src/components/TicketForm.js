import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFormData } from '../helpers.js';
import { createTicket, validateFieldsFailure, closeTicketPopUp } from '.././actions/index.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TicketForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            errors: {}
        };
    }
    
    validateFormData({name, priority}) {
        let errors = {};
        
        if(name === '' || name === undefined) {
            errors.name = {
                message: 'Моля въведете име за задачата.'
            };
        }

        return errors;
    }

    validateForm(form) {
        return this.validateFormData(getFormData(form));
    }

    handleSubmit(event) {
        event.preventDefault();
        let errors = this.validateForm(event.nativeEvent.target);
        
        if(Object.keys(errors).length !== 0) {
            this.setState({errors:errors});
            return;
        }

        this.props.handleSubmit(event);
    }

    render() {
        let { errors: { name, priority } } = this.state;

        return (
            <form method="POST" onSubmit={this.handleSubmit}>
                <TextField
                  hintText="Име на задачата"
                  floatingLabelText="Име:"
                  errorText={name ? name.message : ''}
                  style={{display:'block'}}
                  name="name"
                />
                <div style={TicketForm.style.delimiter} >
                    <span>Приоритет</span>
                </div>
                <RadioButtonGroup name="priority" defaultSelected="1">
                    <RadioButton
                        value="1"
                        label="Важно"
                    />
                    <RadioButton
                        value="0"
                        label="Прегледай"
                    />
                </RadioButtonGroup>
                <div style={TicketForm.style.delimiter} />
                <RaisedButton type="submit" label="Направи" secondary={true}/>
            </form>
        );
    }
}

TicketForm.style = {
    inputs:{
        name:{}
    },
    delimiter:{
        marginTop: 12,
        marginBottom: 12
    }
};

TicketForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (event) => {          
            dispatch(createTicket(getFormData(event.nativeEvent.target)));
            dispatch(closeTicketPopUp());
        }
    };
};

export default connect(undefined, mapDispatchToProps)(TicketForm);
