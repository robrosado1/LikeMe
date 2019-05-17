import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedOut from './logged_out/logged_out';
import LoggedIn from './logged_in/logged_in';

const App = () => (
  <>
    <ProtectedRoute path="/users" component={LoggedIn}/>
    <AuthRoute exact path="/" component={LoggedOut} />
    <AuthRoute exact path="/signup" component={LoggedOut} />
    <AuthRoute exact path="/login" component={LoggedOut} />
  </>
);

export default App;
