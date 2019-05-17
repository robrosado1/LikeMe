import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import TopbarContainer from './header/topbar_container';
import HomePageMain from './main/homepage_main';

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
