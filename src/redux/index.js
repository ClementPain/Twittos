import counterReducer from './counter/counterReducer';
import userReducer from './user/userReducer';

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';

const allReducers = combineReducers({
  counterReducer,
  userReducer
});

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
