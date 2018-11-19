import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../../../util/route_util';

const Topbar = ({ currentUser, logout }) => (
  <div className="loggedout-header">
    <Link to="/"><h1 className="app-name">~likeme~</h1></Link>
  </div>
);

export default Topbar;