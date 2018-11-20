import { connect } from 'react-redux';
import NewsFeed from './newsfeed';
import { fetchPosts, createPost } from '../../../actions/post_actions';

const mapStateToProps = ({entities: { users, posts }, session}, ownProps) => {
  return ({
    currentUser: users[session.id],
    posts
  })
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
