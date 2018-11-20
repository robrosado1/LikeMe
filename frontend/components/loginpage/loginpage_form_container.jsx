import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors, loginDemo } from '../../actions/session_actions';
import LoginpageForm from './loginpage_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(login({ email: 'demo_email', password: 'gobbletyguck' }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginpageForm);
