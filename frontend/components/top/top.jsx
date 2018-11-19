import React from 'react';
import Header from '../header/header';
import NavbarContainer from '../navbar/navbar_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';

const PageTop = () => (
  <>
    <Route exact path="/" component={Header} />
    <Route exact path="/login" component={Header} />
    <Route exact path="/signup" component={Header} />
    <ProtectedRoute path="/users" component={NavbarContainer} />
  </>
);

export default PageTop;
