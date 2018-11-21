import React from 'react';
import { Link } from 'react-router-dom';
import PostListContainer from '../post_list/post_list_container';

const NewsFeed = (props) => {

    return (
      <div className="newsfeed-page">

        <div className="left-links">
          <Link className="wall-link" to={`/users/${props.currentUser.id}/wall`}>
            {props.currentUser.fname} {props.currentUser.lname}
          </Link>
          <ul className="user-links">
            <li>
              <Link to={`/users/${props.currentUser.id}/newsfeed`}>News Feed</Link>
            </li>
            <li>Messenger</li>
            <li>Watch</li>
            <li>Marketplace</li>
          </ul>
          <label>Shortcuts</label>
          <ul className="shortcut-links">
            <li><span>Community</span></li>
          </ul>
          <label>Explore</label>
          <ul className="explore-links">
            <li>Pages</li>
            <li>Events</li>
            <li><Link to="">Friend Lists</Link></li>
            <li>Live Video</li>
            <li>Games</li>
          </ul>
        </div>

        <PostListContainer path={ { location } }/>

        <div className="ads">
          <div className="stories">
            <span>Stories here</span>
          </div>
        </div>
      </div>
    );
}

export default NewsFeed;
