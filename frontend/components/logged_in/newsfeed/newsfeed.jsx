import React from 'react';
import { Link } from 'react-router-dom'

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = {
      author_id: this.currentUser.id,
      body: '',
      receiver_id: this.props.location.pathname.split("/")[2]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit() {
    this.props.submitPost(this.state);
  }

  render() {
    return (
      <div className="newsfeed-page">

        <div className="left-links">
          <Link className="wall-link" to={`users/${this.currentUser.id}/wall`}>
            {this.currentUser.fname} {this.currentUser.lname}
          </Link>
          <ul className="user-links">
            <li>
              <Link to={`users/${this.currentUser.id}/newsfeed`}>News Feed</Link>
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

        <div className="newsfeed-container">
          <div className="post-form-container">
            <form className="post-form" onSubmit={this.handleSubmit}>
              <textarea placeholder={`What's on your mind, ${this.currentUser.fname}?`}
                onChange={this.update('body')}></textarea>
              <input hidden={true} type="submit" value="Share" />
            </form>
          </div>
          <div className="newsfeed">
            <span>Newsfeed goes here!</span>
          </div>
        </div>

        <div className="ads">
          <div className="stories">
            <span>Stories here</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
