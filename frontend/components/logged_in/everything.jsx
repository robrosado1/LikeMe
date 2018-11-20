import React from 'react';
import { Route } from 'react-router-dom'
import NavbarContainer from '../top/navbar/navbar_container';
import Wall from './wall/wall';
import NewsFeedContainer from './newsfeed/newsfeed_container';

class Everything extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavbarContainer/>
        <Route path="/users" component={Wall}/>
        <Route exact path="/users/:userId/newsfeed" component={NewsFeedContainer}/>
      </>
  );
  }
};

export default Everything;

// <Route exact path="/users/:userId/newsfeed" component={FeedPage}/>
