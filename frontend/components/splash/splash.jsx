import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import TopbarContainer from '../top/topbar/topbar_container';
import HomePageMain from '../homepage_main/homepage_main';

const Splash = () => {
  return(
    <>
      <header className="header">
        <Route path="/" component={TopbarContainer}/>
      </header>
      <div className="main-content">
        <Route path="/" component={HomePageMain} />
      </div>
    </>
  );
};

export default withRouter(Splash);
