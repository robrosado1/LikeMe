import React from 'react';
import TopbarContainer from './topbar/topbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageLeft from './session_form/homepage_left';
import PageTop from './top/top';

const App = () => (
  <>
    < PageTop />
    <div className="main-page">
      <div className="main-content">
        <div className="main-left">
          <AuthRoute exact path="/" component={HomePageLeft} />
        </div>
        <div className="main-right">
          <AuthRoute exact path="/" component={SignupFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </div>
      </div>
     </div>
  </>
);

export default App;
