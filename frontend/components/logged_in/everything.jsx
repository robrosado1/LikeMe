import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavbarContainer from '../top/navbar/navbar_container';
import Wall from './wall/wall';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import SearchResults from './search/search';

class Everything extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <NavbarContainer/>
      <Switch>
        <Route path="/users/search" component={SearchResults} />
        <Route path="/users" component={Wall}/>
      </Switch>
        <Route exact path="/users/:userId/newsfeed" component={NewsFeedContainer}/>
      </>
  );
  }
};

export default Everything;
