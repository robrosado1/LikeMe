import React from 'react';
import { Link } from 'react-router-dom'

class LoginpageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.highlight = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  componentDidMount() {
    if (this.props.errors.length > 0) {
      this.highlight = true;
    }
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {

    return (
      <div className="loginpage-box">
        <h4 className="loginpage-title">Log in to Likeme</h4>
        <form className="loginpage-form" onSubmit={this.handleSubmit}>
          <input className={`loginpage-input ${this.highlight ? 'unfilled' : ''}`}
            type="email" value={this.state.email}
            onChange={this.update('email')} placeholder="Email"/>
          <input className="loginpage-input" type="password" value={this.state.password}
            onChange={this.update('password')} placeholder="Password"/>
          <input className="loginpage-button" type="submit" value="Log In" />
        </form>
        <span className="loginpage-or">or</span>
        <div className="loginpage-other">
          <Link className="create-new-acct" to="/signup">Create New Account</Link>
          <Link to="/signup" className="loginpage-demo" onClick={this.props.loginDemo}>Demo Login</Link>
        </div>
      </div>
    )
  }
}

export default LoginpageForm;