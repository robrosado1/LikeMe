import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(login({ email: 'demo_email', password: 'gobbletyguck' }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
