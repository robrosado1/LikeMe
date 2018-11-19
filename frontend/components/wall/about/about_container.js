import { connect } from 'react-redux';
import { edit } from '../../../util/user_api_util';
import AboutBox from './about';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  
  const path = window.location.href.split("#")[1];
  const ownerId = path.split("/")[2];
  return ({
    pageOwner: users[ownerId],
    currentUser: users[session.id],
    path
  });
}

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(edit(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutBox);
