/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
  msg: { title: 'Hello', body: 'English Message' },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RANDOM_MSG_SUCCSESS':
      return { msg: action.json };
    default:
      return state;
  }
};
const configureStore = () => {
  const store = createStore(rootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ));
  return store;
};

export default configureStore;
