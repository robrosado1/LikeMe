import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import TopbarContainer from '../top/topbar/topbar_container';
import LoginpageFormContainer from '../loginpage/loginpage_form_container';
import HomePageLeft from '../main/homepage_left';
import SignupFormContainer from '../session_form/signup_form_container';

const Splash = () => {
  return(
    <>
      <header className="header">
        <Route path ="/" component={TopbarContainer}/>
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
