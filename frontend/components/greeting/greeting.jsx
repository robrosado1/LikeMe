import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="loggedout-header">
      <h1 className="app-name">~likeme~</h1>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="loggedin-header-group">
      <h2 className="loggedin-header-name">Hi, {currentUser.fname}!</h2>
      <button className="loggedin-header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
