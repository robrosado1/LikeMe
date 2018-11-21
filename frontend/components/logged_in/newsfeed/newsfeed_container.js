import { connect } from 'react-redux';
import NewsFeed from './newsfeed';

const mapStateToProps = ({entities: { users }, session}) => {
  return ({
    currentUser: users[session.id],
  })
};

export default connect(mapStateToProps)(NewsFeed);
