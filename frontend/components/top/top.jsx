import React from 'react';
import Header from '../header/header';
import NavbarContainer from '../navbar/navbar_container';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';

const PageTop = () => (
  <>
    <AuthRoute path="/" component={Header} />
    <ProtectedRoute path="/users" component={NavbarContainer} />
  </>
);

export default PageTop;
