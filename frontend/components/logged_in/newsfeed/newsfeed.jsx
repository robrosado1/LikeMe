import React from 'react';
import { Link } from 'react-router-dom';
import PostListContainer from '../post_list/post_list_container';

const NewsFeed = (props) => {

    return (
      <div className="newsfeed-page">
        <div className="left-links">
          <ul className="user-links">
            <li className="left-list-element">
              <Link className="wall-link" to={`/users/${props.currentUser.id}/wall`}>
                <span>{props.currentUser.fname} {props.currentUser.lname}</span>
              </Link>
            </li>
            <li className="left-list-element">
              <Link to={`/users/${props.currentUser.id}/newsfeed`}>
                News Feed
              </Link>
            </li>
            <li className="left-list-element">Messenger</li>
            <li className="left-list-element">Watch</li>
            <li className="left-list-element">Marketplace</li>
            <label>Shortcuts</label>
            <li className="left-list-element">Community</li>
            <label>Explore</label>
            <li className="left-list-element">Pages</li>
            <li className="left-list-element">Events</li>
            <li className="left-list-element">
              <Link to="">
                Friend Lists
              </Link>
            </li>
            <li className="left-list-element">Live Video</li>
            <li className="left-list-element">Games</li>
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
