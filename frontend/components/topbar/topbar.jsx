import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ currentUser, logout }) => (
  <div className="loggedout-header">
    <Link to="/"><h1 className="app-name">~likeme~</h1></Link>
  </div>
);


export default Topbar;
