import {
  deleteToApi,
  postToApi
} from '../util/api_helpers';

export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";

const receiveSession = (session) => ({
  type: RECEIVE_SESSION,
  session
});

const removeSession = () => ({
  type: REMOVE_SESSION
});

export const logIn = (user) => (dispatch) => {
  return postToApi('sign_in', user)
    .then(
      session => dispatch(receiveSession(session))
    )
};

export const logOut = () => (dispatch) => {
  return deleteToApi('sign_out')
    .then(
      () => dispatch(removeSession())
    )
};
