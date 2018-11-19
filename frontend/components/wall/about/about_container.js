import { connect } from 'react-redux';
import { edit } from '../../../util/user_api_util';
import AboutBox from './about';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return ({
    pageOwner: users[ownProps.path[7]],
    currentUser: users[session.id]
  });
}

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(edit(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutBox);
