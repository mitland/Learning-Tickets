import React from 'react';
import ReactDom from 'react-dom';
import { Provider }  from 'react-redux';
import App from './containers/App.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore.js';
asda
injectTapEventPlugin();

const store = configureStore();

const element = document.getElementById('root');
const render = ReactDom.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>, 
	element
);

