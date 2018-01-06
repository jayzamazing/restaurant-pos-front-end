import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions/auth';
import authReducer from './reducers/auth';
import {reducer as formReducer} from 'redux-form';

const store = createStore(
  combineReducers({
    auth: authReducer,
    form: formReducer
  }),
  applyMiddleware(thunk)
);

//hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
