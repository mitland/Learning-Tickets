import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = fromJS({
    creatingTicket: false,
    tickets: {
        all: {
            '2f1332vsehg35hqws':{
                id: '2f1332vsehg35hqws',
                name: 'Задача',
                priority: '1',
                time: 0,
                state: 'playing'
            },
            '2f1332vsehgsada35hqws':{
                id: '2f1332vsehgsada35hqws',
                name: 'Задача',
                priority: '1',
                time: 0,
                state: 'playing'
            },
            '2f1332vsehgdwada35hqws':{
                id: '2f1332vsehgdwada35hqws',
                name: 'Задача',
                priority: '1',
                time: 0,
                state: 'playing'
            },
            '2f1332vsehg3wdwadaw5hqws':{
                id: '2f1332vsehg3wdwadaw5hqws',
                name: 'Задача',
                priority: '1',
                time: 0,
                state: 'playing'
            }
        },
        started:''
    },
    errors: []
});

export default function configureStore(){
    return createStore(
            rootReducer, 
            initialState, 
            applyMiddleware(logger, thunk)
    );
}
