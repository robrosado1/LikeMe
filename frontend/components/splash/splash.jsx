import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import TopbarContainer from '../top/topbar/topbar_container';
import TopbarWithSignup from '../top/topbar/topbar_with_signup_button';
import LoginFormContainer from '../session_form/login_form_container';
import LoginpageFormContainer from '../loginpage/loginpage_form_container';
import HomePageLeft from '../main/homepage_left';
import SignupFormContainer from '../session_form/signup_form_container';

const Splash = () => {
  return(
    <>
      <header className="header">
        <div className="header-storage">
          <Route exact path ="/" component={TopbarContainer}/>
          <Route exact path ="/login" component={TopbarWithSignup}/>
          <Route exact path="/signup" component={TopbarContainer}/>
          <Route exact path="/" component={LoginFormContainer}/>
          <Route exact path="/signup" component={LoginFormContainer}/>
        </div>
      </header>
      <div className="main-content">
        <div className="homepage-content-box">
          <Route exact path="/" component={HomePageLeft} />
          <Route exact path="/login" component={LoginpageFormContainer}/>
          <Route exact path="/" component={SignupFormContainer} />
          <Route exact path="/signup" component={SignupFormContainer} />
        </div>
      </div>
    </>
  );
};

export default withRouter(Splash);
