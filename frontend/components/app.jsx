import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Everything from './logged_in/everything';

const App = () => (
  <>
    <AuthRoute path="/" component={Splash} />
    <ProtectedRoute path="/users" component={Everything}/>
  </>
);

export default App;


// <ProtectedRoute path="/users/:userId/" component={Headboard} />
