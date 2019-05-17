import React from 'react';
import { Route } from 'react-router-dom'
import NavbarContainer from './navbar/navbar_container';
import Wall from './wall/wall';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import SearchResults from './search/search';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <NavbarContainer/>
      <Route exact path="/users/search" component={SearchResults} />
      <Route exact path="/users/:userId/wall" component={Wall}/>
      <Route exact path="/users/:userId/newsfeed" component={NewsFeedContainer}/>
      </>
  );
  }
};

export default LoggedIn;
