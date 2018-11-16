import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PageTop from './top/top';
import Main from './main/main';

const App = () => (
  <>
    <PageTop />
    <Main />
  </>
);

export default App;
