import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createComment, fetchComments } from '../../../../actions/comment_actions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      commenter_id: this.props.currentUser.id,
      commentable_id: this.props.postId,
      commentable_type: this.props.type
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(comment);
    this.setState({ body: '' });
  }

  componentDidMount() {
    // this.props.fetchComments()
  }

  render() {
    return (
      <div className="comment-box">
        <ul className="existing-comments">
          {Object.values(this.props.comments).map(comment => {
            if (comment.commentable_id !== this.props.postId) {
              return "";
            }
            return (
              <li key={comment.id} className="single-comment">
                <span className="comment-author">
                  <Link to={`/users/${comment.commenter_id}/wall`}>
                    {this.props.users[comment.commenter_id].fname} {this.props.users[comment.commenter_id].lname}
                  </Link>
                </span>
                <span className="comment-body">
                  {comment.body}
                </span>
              </li>
            );
          })}
        </ul>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input className="comment-input" type="text"
            placeholder="Write a comment..." onChange={this.update('body')}
            value={this.state.body}></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({entities: { users, comments }, session}, ownProps) => {
  return ({
    postId: ownProps.postId,
    type: ownProps.type,
    currentUser: users[session.id],
    comments,
    users
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: () => dispatch(fetchComments())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
