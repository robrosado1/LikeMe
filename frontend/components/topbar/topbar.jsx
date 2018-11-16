import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const SignupButton = () => (
  <Link className="login-page-signup-button" to="/signup">Sign Up</Link>
);

const Topbar = ({ currentUser, logout }) => (
  <div className="loggedout-header">
    <Link to="/"><h1 className="app-name">~likeme~</h1></Link>
    <AuthRoute exact path="/login" component={SignupButton} />
  </div>
);


export default Topbar;
