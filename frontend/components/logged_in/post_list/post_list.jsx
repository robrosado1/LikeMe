import React from 'react';
import { Link } from 'react-router-dom';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = {
      author_id: this.currentUser.id,
      body: '',
      receiver_id: Number(this.props.path.split("/")[2])
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
    return (
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
            {Object.values(this.props.posts).reverse().map(post => {
              if (this.currentUser.id !== post.author_id) {
                return "";
              }
              return (
              <li key={post.id} className="newsfeed-post">
                <div className="post-window">
                  <Link to={`/users/${post.author_id}/wall`} className="post-owner">
                    {this.props.users[post.author_id].fname} {this.props.users[post.author_id].lname}
                  </Link>
                  <p className="post-body">{post.body}</p>
                </div>
                <div className="bottom-bar">
                  <div className="comment-block">
                    <button className="comment-button">
                      <i className="far fa-comment-alt"></i>
                      <span className="comment-label">Comment</span>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PostList;
