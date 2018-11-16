import React from 'react';
import { AuthRoute } from '../../util/route_util';
import SignupFormContainer from '../session_form/signup_form_container';
import HomePageLeft from '../session_form/homepage_left';

const Main = () => (
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
);
 export default Main;
