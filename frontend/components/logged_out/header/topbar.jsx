import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_forms/login_form_container';

const Topbar = (props) => {
  let loginForm = <LoginFormContainer />;
  let signupButton = null;
  if (props.location.pathname === "/login") {
    signupButton = <Link className="login-page-signup-button" to="/signup">Sign Up</Link>;
    loginForm = null;
  }


  return (
  <div className="header-storage">
    <div className="loggedout-header">
      <Link to="/"><h1 className="app-name">~likeme~</h1></Link>
      {signupButton}
    </div>
    {loginForm}
  </div>
)};

export default Topbar;
