import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons'
import * as serviceWorker from './serviceWorker';

//Include Provider and connect api to connect actions reducers
import { Provider } from 'react-redux';
//Import createStore method for creating a store
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { searchRobots, requestRobots } from './reducers';

//Middleware
import {createLogger} from 'redux-logger';

//handling asynchornous AJAX calls
//importing redux-thunk
import thunkMiddleware from 'redux-thunk';

//creating logger
const logger = createLogger();


//combine two reducers into root reducer
const rootReducer = combineReducers({ searchRobots, requestRobots});

//create a store and pass reducers
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
