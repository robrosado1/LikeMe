import React from 'react';
import TopbarContainer from '../topbar/topbar_container';
import LoginFormContainer from '../session_form/login_form_container';
import { AuthRoute } from '../../util/route_util';

const Header = () => (
  <header className="header">
    <div className="header-storage">
      <AuthRoute exact path="/" component={TopbarContainer} />
      <AuthRoute exact path="/login" component={TopbarContainer} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
    </div>
  </header>
);

export default Header;
