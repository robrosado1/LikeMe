import React from 'react';

const HomePageLeft = () => {
  return (
    <div className="homepage-left">
      <h2>Connect with friends and the world around you on Likeme.</h2>
      <ul className="info-list">
        <li className="homepage-list-element">
          <img className="homepage-image" src={window.newsfeedURL} />
          <strong>See photos and updates</strong><span>from friends in News Feed.</span></li>
        <li className="homepage-list-element">
          <img className="homepage-image" src={window.timelineURL} />
          <strong>Share what's new</strong><span>in your life on your Timeline.</span></li>
        <li className="homepage-list-element">
          <img className="homepage-image" src={window.searchURL} />
          <strong>Find more</strong><span>of what you're looking for with Facebook Search.</span></li>
      </ul>
    </div>
  )
}

export default HomePageLeft;
