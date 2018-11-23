import React from 'react';
import { Link } from 'react-router-dom';
import PostListContainer from '../post_list/post_list_container';

const NewsFeed = (props) => {

    return (
      <div className="newsfeed-page">
        <div className="left-links">
          <ul className="user-links">
            <Link className="wall-link" to={`/users/${props.currentUser.id}/wall`}>
              <li className="wall-link-box">
                <span>{props.currentUser.fname} {props.currentUser.lname}</span>
              </li>
            </Link>
            <Link to={`/users/${props.currentUser.id}/newsfeed`}>
              <li>
                News Feed
              </li>
            </Link>
            <li>Messenger</li>
            <li>Watch</li>
            <li>Marketplace</li>
            <label>Shortcuts</label>
            <li>Community</li>
            <label>Explore</label>
            <li>Pages</li>
            <li>Events</li>
            <Link to="">
              <li>
                Friend Lists
              </li>
            </Link>
            <li>Live Video</li>
            <li>Games</li>
          </ul>
        </div>

        <PostListContainer props={ { location } }/>

        <div className="ads">
          <div className="stories">
            <span className="stories-header">Stories</span>
          </div>
        </div>
      </div>
    );
}

export default NewsFeed;
