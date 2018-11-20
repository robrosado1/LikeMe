//headboard - Box containing profile pic, name and links for timeline(wall),
//about, friends, photos, archive(?), and more(dropdown)
//leftside - intro box, photos box, friends Box
//rightside - make post, newsfeed/wall-posts
import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import Headboard from './headboard/headboard';
import AboutContainer from './about/about_container';

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
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Wall);

// <Route path="/users" component={Headboard} inherited={ props.match }/>
