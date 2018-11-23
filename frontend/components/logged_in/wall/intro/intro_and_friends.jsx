import React from 'react';
import PostListContainer from '../../post_list/post_list_container';

const IntroAndFriends = () => (
  <div className="wall-container">
    <div className="intro-and-friends">
      <div className="intro-box">
        <span><i className="fas fa-globe-americas"></i>Intro</span>
      </div>
      <div className="friends-box">
        <span><i className="fas friends-icon"></i>Friends</span>
      </div>
    </div>
    <PostListContainer />
  </div>
);

export default IntroAndFriends;
