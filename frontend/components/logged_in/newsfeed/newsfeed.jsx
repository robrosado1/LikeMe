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
                <img className="left-link-pic" src={props.currentUser.profile_pic_url} />
                <span>{props.currentUser.fname} {props.currentUser.lname}</span>
              </Link>
            </li>
            <li className="left-list-element to-newsfeed">
              <Link className="newsfeed-link" to={`/users/${props.currentUser.id}/newsfeed`}>
                News Feed
              </Link>
            </li>
            <label>Shortcuts</label>
            <li className="left-list-element">
              <a href="https://robrosado1.github.io/Pets-vs-Skeletons/">
                My Game
              </a>
            </li>
            <li className="left-list-element">
              <a href="https://github.com/robrosado1">
                My Github
              </a>
            </li>
            <li className="left-list-element">
              <a href="https://www.linkedin.com/in/robinson-rosado-283273131">
                My Linkedin
              </a>
            </li>
            <li className="left-list-element">
              <a href="https://robrosado1.github.io/">
                My Site
              </a>
            </li>
            <label>Explore</label>
            <li className="left-list-element">
              <Link to={`/users/${props.currentUser.id}/friends`}>
                Friend List
              </Link>
            </li>
            <li className="left-list-element">
              <a href="https://github.com/robrosado1/LikeMe">
                LikeMe's Code
              </a>
            </li>
          </ul>
        </div>

        <PostListContainer props={ { location } }/>

        <div className="ads">
          <div className="stories">
            <span className="stories-header">About the Creator</span>
            <p>Hello, and welcome to LikeMe: a Fullstack website made by me,
              Robinson Rosado! Thank you very much for the visit and I hope you
              enjoy it as you explore. I made this site using a Rails backend
              for creating, storing, and querying for relevant information. The
              frontend was made using a combination of Javascript, React and
              Redux for rendering and storing user-specific information for
              quick and easy access. If you would like to learn more about me or
              my other projects then please visit my Linkedin, Github or
              Personal site via the links on the left side of this page.</p>
          </div>
        </div>
      </div>
    );
}

export default NewsFeed;
