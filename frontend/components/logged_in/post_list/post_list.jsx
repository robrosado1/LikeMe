import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentForm from './comments/comment_form';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.state = {
      author_id: this.currentUser.id,
      body: "",
      receiver_id: Number(this.props.history.location.pathname.split("/")[2]),
      photo: "",
      photoUrl: "",
      imagePath: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.postToWho = this.postToWho.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.removePic = this.removePic.bind(this);
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

  removePic(e) {
    const input = document.getElementById("photo-input");
    input.value = "";
    this.setState({ photo: "", photoUrl: "", imagePath: "" });
  }

  handleFile(e) {
    const reader = new FileReader();
    const fileList = e.currentTarget;
    const file = fileList.files[0];
    reader.onloadend = () => {
      this.setState({
        photoUrl: reader.result,
        photo: file,
        imagePath: fileList.value
      });
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photo: "", photoUrl: "", imagePath: "" });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length < 1) {
      return;
    }
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[author_id]', this.state.author_id);
    formData.append('post[receiver_id]', this.state.receiver_id);

    if (this.state.photo) {
      formData.append('post[photo]', this.state.photo);
    }
    this.props.createPost(formData);

    this.setState({ body: "", photoUrl: "", photo: "", imagePath: "" });
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e)
    }
  }

  postToWho() {
    if (this.currentUser.id === this.state.receiver_id) {
      return `What's on your mind, ${this.currentUser.fname}?`;
    } else {
      return `Write something to ${this.props.users[this.state.receiver_id].fname}...`;
    }
  }

  render() {
    let empty = true;
    if (this.state.body.length > 0) {
      empty = false;
    }

    let preview = this.state.photoUrl ? <img className="photo-preview"
      onClick={this.removePic} src={this.state.photoUrl} /> : null;
    const pick = () => (
      <span className="upload-label">
        <i className="far fa-image image-icon"></i> Photo/Video
      </span>
    );
    return (
      <div className="newsfeed-container">
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label className="make-post">
              <i className="fas fa-pencil-alt"></i> Make Post
            </label>
            <textarea placeholder={this.postToWho()}
              onChange={this.update("body")} value={this.state.body}
              onKeyDown={this.handleEnter}></textarea>
            {preview}
            <div className="photo-label-border"></div>
            <input type="file" name="photo-input" id="photo-input" className="photo-input"
              onChange={this.handleFile} />
            <label className="photo-input-label" htmlFor="photo-input">{pick()}</label>
            <input disabled={empty} type="submit" value="Share" />
          </form>
        </div>
        <div className="newsfeed">
          <span className="posts-header">Posts</span>
          <ul className="newsfeed-posts">
            {Object.values(this.props.posts).reverse().map(post => {
              if (post.receiver_id !== this.state.receiver_id) {
                return "";
              }
              const photo = post.photoUrl ? <img className="post-photo"
                src={post.photoUrl} /> : null;
              return (
                <li key={post.id} className="newsfeed-post">
                  <div className="post-window">
                    <Link to={`/users/${post.author_id}/wall`} className="post-owner">
                      {this.props.users[post.author_id].fname} {this.props.users[post.author_id].lname}
                    </Link>
                    <p className="post-body">{post.body}</p>
                  </div>
                  {photo}
                  <div className="bottom-bar">
                    <div className="comment-block">
                      <button className="comment-button">
                        <i className="far fa-comment-alt"></i>
                        <span className="comment-label">Comment</span>
                      </button>
                    </div>
                  </div>
                  <CommentForm type={"Post"} postId={post.id}/>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(PostList);
