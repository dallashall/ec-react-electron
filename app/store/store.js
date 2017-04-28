import { createStore, applyMiddleware } from 'redux';
import thunk from 'thunk-redux';
import RootReducer from '../reducers/root_reducer';

export default(preloadedState) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
)
