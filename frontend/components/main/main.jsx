import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import Wall from '../wall/wall';
import HomePage from './homepage/homepage';


const Main = () => (
  <div className="main-content">
    <AuthRoute path="/" component={HomePage} />
    <ProtectedRoute path="/users" component={Wall} />
  </div>
);
 export default Main;
