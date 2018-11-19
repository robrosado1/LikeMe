import React from 'react';

const HomePageLeft = () => {
  return (
    <div className="homepage-left">
      <h2>Connect with friends and the world around you on Likeme.</h2>
      <ul className="info-list">
        <li className="homepage-list-element">
          <img className="homepage-image" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32964924_188362901982436_5189181917978689536_n.png?_nc_cat=1&amp;_nc_ht=scontent-lga3-1.xx&amp;oh=dee379e6cff10be3d31bf41415e4b40a&amp;oe=5C825DA3" />
          <strong>See photos and updates</strong><span>from friends in News Feed.</span></li>
        <li className="homepage-list-element">
          <img className="homepage-image" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32967637_1400301410075884_2994305350271762432_n.png?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=0e01899fb81999738d4b9e4b6de29cef&oe=5C854AB0" />
          <strong>Share what's new</strong><span>in your life on your Timeline.</span></li>
        <li className="homepage-list-element">
          <img className="homepage-image" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/33137320_1687624661315903_5362007326045765632_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=772c0a7a90088f8ab76f4487ef20daa1&oe=5C765505" />
          <strong>Find more</strong><span>of what you're looking for with Facebook Search.</span></li>
      </ul>
    </div>
  )
}

export default HomePageLeft;
