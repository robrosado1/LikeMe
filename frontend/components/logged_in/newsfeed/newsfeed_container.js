import { connect } from 'react-redux';
import NewsFeed from './newsfeed';

const mapStateToProps = ({entities: { users }, session}, ownProps) => {
  return ({
    currentUser: users[session.id]
  })
};

const mapDispatchToProps = dispatch => ({
  submitPost: post => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
