//headboard - Box containing profile pic, name and links for timeline(wall),
//about, friends, photos, archive(?), and more(dropdown)
//leftside - intro box, photos box, friends Box
//rightside - make post, newsfeed/wall-posts
import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import Headboard from './headboard/headboard';
import AboutContainer from './about/about_container';

const Wall = (props) => {
return (
  <>
    <Headboard path={props.path}/>
    <AboutContainer path={props.path}/>
  </>
)};


const mapStateToProps = (state, { location: { pathname } }) => {
  return ({
    path: pathname
  });
};

export default connect(mapStateToProps)(Wall);
