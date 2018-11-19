import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import SignupFormContainer from '../../session_form/signup_form_container';
import HomePageLeft from '../homepage_left';
import LoginpageFormContainer from '../../loginpage/loginpage_form_container';

const MainRight = () => (
  <div className="main-right">
    <SignupFormContainer />
  </div>
);

const HomePage = () => (
  <div className="homepage-content-box">
    <AuthRoute exact path="/" component={HomePageLeft} />
    <AuthRoute exact path="/" component={MainRight}/>
    <AuthRoute exact path="/signup" component={MainRight}/>
    <AuthRoute exact path="/login" component={LoginpageFormContainer} />
  </div>
);

export default HomePage;
