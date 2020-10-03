import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons'
import * as serviceWorker from './serviceWorker';

//Include Provider and connect api to connect actions reducers
import { Provider } from 'react-redux';
//Import createStore method for creating a store
import {createStore, applyMiddleware} from 'redux';
import { searchRobots } from './reducers';

//Middleware
import {createLogger} from 'redux-logger';


//creating logger
const logger = createLogger();




//create a store and pass reducers
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
