import { connect } from 'react-redux';
import { edit } from '../../../util/user_api_util';
import AboutBox from './about';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  const ownerId = ownProps.path.split("/")[2];
  debugger
  return ({
    pageOwner: users[ownerId],
    currentUser: users[session.id]
  });
}

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(edit(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutBox);
