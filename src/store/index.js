import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import initialState from './initialState';

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ?
      window.devToolsExtension()
      :
      f => f,
  ),
);

export default store;
