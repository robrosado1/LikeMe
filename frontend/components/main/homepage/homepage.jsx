import React from 'react';
import { Route } from 'react-router-dom';
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
    <Route exact path="/" component={HomePageLeft} />
    <Route exact path="/" component={MainRight}/>
    <Route exact path="/signup" component={MainRight}/>
    <Route exact path="/login" component={LoginpageFormContainer} />
  </div>
);

export default HomePage;
