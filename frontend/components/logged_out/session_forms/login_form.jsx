import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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

  componentWillUnmount() {
  }

  render() {

    if (this.props.errors[0] === 'Invalid login credentials') {

      return (
        <Redirect to="/login" />
      );
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <div className="login-form">
            <br/>
            <div className="login-form-email-section">
              <label className="login-form-email-label">Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </div>
            <br/>
            <div className="login-form-password-section">
              <label className="login-form-password-label">Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <Link to="/" className="demo-login-link" onClick={this.props.loginDemo}>Demo Login</Link>
            </div>
            <br/>
            <input className="login-submit-button" type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
