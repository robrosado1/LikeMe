import { connect } from 'react-redux';
import PostList from './post_list';
import { fetchPosts, createPost } from '../../../actions/post_actions';
import { fetchUsers } from '../../../actions/user_actions';

const mapStateToProps = ({entities: { users, posts }, session}, ownProps) => {
  
  return ({
    currentUser: users[session.id],
    posts,
    users
  });
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
