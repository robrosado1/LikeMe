import React from 'react';
import { AuthRoute } from '../../util/route_util';
import SignupFormContainer from '../session_form/signup_form_container';
import HomePageLeft from '../session_form/homepage_left';
import LoginpageFormContainer from '../loginpage/loginpage_form_container'
import MainRight from './main_right';

const Main = () => (
  <div className="main-content">
    <AuthRoute exact path="/" component={HomePageLeft} />
    <AuthRoute exact path="/" component={MainRight}/>
    <AuthRoute exact path="/signup" component={MainRight}/>
    <AuthRoute exact path="/login" component={LoginpageFormContainer} />
  </div>
);
 export default Main;
