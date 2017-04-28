import {
  delete_to_api,
  get_to_api,
  patch_to_api,
  post_to_api
} from '../util/api_helpers';

export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";

const receive_session = (session) => ({
  type: RECEIVE_SESSION,
  session
});

const remove_session = () => ({
  type: REMOVE_SESSION
});

export const log_in = (user) => (dispatch) => {
  return post_to_api('sign_in', user)
    .then(
      session => dispatch(receive_session(session))
    )
};

export const log_out = () => (dispatch) => {
  return delete_to_api('sign_out')
    .then(
      () => dispatch(remove_session())
    )
};
