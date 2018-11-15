import React from 'react';
import Header from '../header/header';
import NavbarContainer from '../navbar/navbar_container';
import { ProtectedRoute } from '../../util/route_util';

const PageTop = () => (
  <>
    <Header />
    <ProtectedRoute path="/users" component={NavbarContainer} />
  </>
);

export default PageTop;
