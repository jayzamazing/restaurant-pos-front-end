import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions/auth';
import authReducer from './reducers/auth';
import tableReducer from './reducers/table';
import {reducer as formReducer} from 'redux-form';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(
  combineReducers({
    auth: authReducer,
    form: formReducer,
    table: tableReducer
  }),
  applyMiddleware(thunk, logger)
);

//hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
