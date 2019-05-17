import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './logged_out/splash';
import Everything from './logged_in/everything';

const App = () => (
  <>
    <ProtectedRoute path="/users" component={Everything}/>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={Splash} />
    <AuthRoute exact path="/login" component={Splash} />
  </>
);

export default App;
