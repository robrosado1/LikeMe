import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../../actions/session_actions';
import { submitSearch } from '../../../actions/ui_actions';

const mapStateToProps = state => {

  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  
  return ({
    logout: () => dispatch(logout()),
    submitSearch: term => dispatch(submitSearch(term))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
