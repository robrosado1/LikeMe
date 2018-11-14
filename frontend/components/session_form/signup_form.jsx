import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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
    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
              <div className="signup-form-name-section">
                <label className="signup-form-name-label">Name</label>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="signup-input"
                />
              </div>
              <br/>
            <div className="signup-form-email-section">
              <label className="signup-form-email-label">Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </div>
            <br/>
            <div className="signup-form-password-section">
              <label className="signup-form-password-label">Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </div>
            <br/>
            <input className="session-submit" type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
