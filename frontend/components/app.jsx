import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
// import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div className="content">
    <div className="main-page">
      <div className="topbar">
        <header className="header">
          <GreetingContainer />
          <AuthRoute exact path="/" component={LoginFormContainer} />
        </header>
      </div>
        <div className="main-content">
          <div className="main-left">
          </div>
          <div className="main-right">
            <AuthRoute exact path="/" component={SignupFormContainer} />
          </div>
        </div>
     </div>
  </div>
);

export default App;
