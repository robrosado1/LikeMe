import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import Everything from './logged_in/everything';

const App = () => (
  <>
    <ProtectedRoute path="/users" component={Everything}/>
    <AuthRoute path="/" component={Splash} />
  </>
);

export default App;
