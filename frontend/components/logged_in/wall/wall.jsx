import React from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import Headboard from './headboard/headboard';
import AboutContainer from './about/about_container';
import IntroAndFriends from './intro/intro_and_friends';

const mapStateToProps = (state, { location: { pathname } }) => {

  return ({
    path: pathname
  });
};

const Wall = (props) => {
  if (props.location.pathname.match(/newsfeed$/)) {
    return "";
  }
  return (
    <div className="main-content">
      <div className="wall-content">
        <Route path="/users" component={Headboard} inherited={ props.match }/>
        <Route exact path="/users/:userId/about" component={AboutContainer} />
        <Route exact path="/users/:userId/wall" component={IntroAndFriends}/>
      </div>
    </div>
  );
};

const mspWall = connect(mapStateToProps)(Wall);

export default withRouter(mspWall);
