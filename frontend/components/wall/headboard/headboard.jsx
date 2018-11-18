import React from 'react';
import { Link } from 'react-router-dom';

const Headboard = () => (
  <div className="headboard">
    <div className="cover-photo">
    </div>
    <div className="headboard-navigation">
      <ul className="headboard-links">
        <li><Link to="wall">Timeline</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="friends">Friends</Link></li>
        <li><Link to="photos">Photos</Link></li>
        <li><Link to="archive">Archive</Link></li>
        <li><button onClick={}>More</button></li>
      </ul>
    </div>
  </div>
);
