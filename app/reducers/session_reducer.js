import merge from 'lodash/merge';

import {
  RECEIVE_SESSION,
  REMOVE_SESSION
} from '../actions/session_actions';

const _initial_state = {
  session: {
    user: {
      username: "",
      email: "",
      id: null
    },
    auth_token: null
  }
}

export default SessionReducer = (state = _initial_state, action) => {
  Object.freeze(state);
  let nextState = merge ({}, state);
  switch (action.type) {
    case RECEIVE_SESSION:
      nextState = merge (nextState, action.session);
      return nextState;
    case REMOVE_SESSION:
      return _initial_state;
    default:
      return state;
  }
}
