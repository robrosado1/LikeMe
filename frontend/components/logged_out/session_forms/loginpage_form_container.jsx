import { connect } from 'react-redux';
import { login, clearErrors, loginDemo } from '../../../actions/session_actions';
import LoginpageForm from './loginpage_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(loginDemo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginpageForm);
