import React from 'react';
import { AuthRoute } from '../../util/route_util';
import SignupFormContainer from '../session_form/signup_form_container';
import HomePageLeft from '../session_form/homepage_left';

const MainRight = () => (
  <div className="main-right">
    <SignupFormContainer />
  </div>
);

const Main = () => (
  <div className="main-page">
    <div className="main-content">
      <AuthRoute exact path="/" component={HomePageLeft} />
      <AuthRoute exact path="/" component={MainRight}/>
      <AuthRoute exact path="/signup" component={MainRight}/>
    </div>
  </div>
);
 export default Main;
