import { connect } from 'react-redux';
import { edit } from '../../util/user_api_util';
import About from './about';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params]
});

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(edit(user))
});

export default connect(null, mapDispatchToProps)(About);
