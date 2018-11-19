import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignupFormContainer from '../session_form/signup_form_container';
import HomePageLeft from '../session_form/homepage_left';
import LoginpageFormContainer from '../loginpage/loginpage_form_container';
import Wall from '../wall/wall'

const MainRight = () => (
  <div className="main-right">
    <SignupFormContainer />
  </div>
);

const Main = () => (
  <div className="main-content">
    <AuthRoute exact path="/" component={HomePageLeft} />
    <AuthRoute exact path="/" component={MainRight}/>
    <AuthRoute exact path="/signup" component={MainRight}/>
    <AuthRoute exact path="/login" component={LoginpageFormContainer} />
    <ProtectedRoute path="/users" component={Wall} />
  </div>
);
 export default Main;
