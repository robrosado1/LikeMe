import React from 'react';
import { Link } from 'react-router-dom'

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.currentUser = this.props.currentUser;
    this.state = {
      author_id: this.currentUser.id,
      body: '',
      receiver_id: Number(this.props.location.pathname.split("/")[2])
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

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  render() {
    let empty = true;
    if (this.state.body.length > 0) {
      empty = false;
    }
    // console.log(this.props.users);
    // console.log(this.props.posts);
    return (
      <div className="newsfeed-page">

        <div className="left-links">
          <Link className="wall-link" to={`/users/${this.currentUser.id}/wall`}>
            {this.currentUser.fname} {this.currentUser.lname}
          </Link>
          <ul className="user-links">
            <li>
              <Link to={`/users/${this.currentUser.id}/newsfeed`}>News Feed</Link>
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
              <label>Make Post</label>
              <textarea placeholder={`What's on your mind, ${this.currentUser.fname}?`}
                onChange={this.update('body')}></textarea>
              <input disabled={empty} type="submit" value="Share" />
            </form>
          </div>
          <div className="newsfeed">
            <span>Newsfeed goes here!</span>
            <ul className="newsfeed-posts">
              {Object.values(this.props.posts).reverse().map(post => (
                <li key={post.id} className="newsfeed-post">
                  <Link to={`/users/${post.author_id}/wall`} className="post-owner">
                    {this.props.users[post.author_id].fname} {this.props.users[post.author_id].lname}
                  </Link>
                  <p className="post-body">{post.body}</p>
                </li>
              ))}
            </ul>
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


// <input disabled={empty} type="submit" value="Share" />
