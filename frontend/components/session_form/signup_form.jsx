import React from 'react';
import { withRouter } from 'react-router-dom';
import { monthOptions, dayOptions, yearOptions } from '../../util/constants.jsx';

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
      <ul className="signup-errors">
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
        <h2 className="signup-headline">Sign Up</h2>
        <h4 className="signup-subheadline">It's free and always will be.</h4>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
            <br/>
              <div className="signup-form-name-section">
                <input type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')}
                  className="signup-name-input"
                  placeholder="First name"
                />
                <input type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')}
                  className="signup-name-input"
                  placeholder="Last name"
                />
              </div>
              <br/>
            <div className="signup-form-email-section">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email"
              />
            </div>
            <br/>
            <div className="signup-form-password-section">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"
              />
            </div>
            <br/>
            <div className="signup-form-birthdate-section">
              <h4 className="homepage-birthdate-header">Birthday</h4>
              <br/>
              <select id="month">
                <option value="month" disabled>Month</option>
                {monthOptions}
              </select>
              <select id="day">
                <option value="day" disabled>Day</option>
                {dayOptions}
              </select>
              <select id="year">
                <option value="year" disabled>Year</option>
                {yearOptions}
              </select>
            </div>
            <br/>
            <input className="signup-submit-button" type="submit" value="Sign Up" />
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);






// <input type="date"
//   value={this.state.birthdate}
//   onChange={this.update('birthdate')}
//   className="signup-birthdate-input"
//   />
