import React from 'react';
import TopbarContainer from '../topbar/topbar_container';
import LoginFormContainer from '../session_form/login_form_container';
import { AuthRoute } from '../../util/route_util';

const Header = () => (
  <header className="header">
    <AuthRoute exact path="/" component={TopbarContainer} />
    <AuthRoute exact path="/login" component={TopbarContainer} />
    <AuthRoute exact path="/" component={LoginFormContainer} />
  </header>
);

export default Header;
