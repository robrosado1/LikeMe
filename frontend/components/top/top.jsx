import React from 'react';
import Header from './header/header';
import NavbarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';

const PageTop = () => (
  <>
    <Header />
  </>
);

export default PageTop;
