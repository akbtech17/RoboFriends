import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons'
import * as serviceWorker from './serviceWorker';

//Include Provider and connect api to connect actions reducers
import { Provider } from 'react-redux';
//Import createStore method for creating a store
import {createStore} from 'redux';
import { searchRobots } from './reducers';




//create a store and pass reducers
const store = createStore(searchRobots);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
