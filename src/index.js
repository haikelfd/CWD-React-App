import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import{ createStore, applyMiddleware} from 'redux';
import{ createlogger} from 'react-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import{ searchRobots, requestRobots} from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots})
const store =
createStore(searchRobots, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
       <provider store={store}>
           <app/>

       </provider>, document.getElemenetById('root'));
registerServiceWorker();
