import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';
import App from './src/App';
import thunk from 'redux-thunk';

var store = createStore(todoApp, applyMiddleware(thunk));

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>), document.getElementById('app')
);