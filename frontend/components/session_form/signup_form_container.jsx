import { connect } from 'react-redux';
import { signup, login, clearErrors, loginDemo } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(loginDemo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
