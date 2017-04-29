import React from 'react';
import SignInForm from './sign_in_form';
import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => dispatch(logIn(user))
  }
}

export default connect(null, mapDispatchToProps)(SignInForm);
