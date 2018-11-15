import React from 'react';
import { withRouter } from 'react-router-dom';
import { monthOptions, dayOptions, yearOptions } from '../../util/constants.jsx';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      birthdate: '',
      month: '',
      year: '',
      day: '',
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      birthdate: new Date(this.state.year, this.state.month, this.state.day)
    });
    debugger
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  handleOption(e) {
      this.setState({
      gender: e.target.value
    });
  }

  assembleDate() {

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
                placeholder="New password"
              />
            </div>
            <br/>
            <div className="signup-form-birthdate-section">
              <h4 className="homepage-birthdate-header">Birthday</h4>
              <br/>
              <select id="month" onChange={this.update('month')}>
                <option value="month" disabled>Month</option>
                {monthOptions}
              </select>
              <select id="day" onChange={this.update('day')}>
                <option value="day" disabled>Day</option>
                {dayOptions}
              </select>
              <select id="year" onChange={this.update('year')}>
                <option value="year" disabled>Year</option>
                {yearOptions}
              </select>
            </div>
            <br/>
              <input type="radio" value="female" checked={this.state.gender === 'female'}
                onChange={this.handleOption} />Female
              <input type="radio" value="male" checked={this.state.gender === 'male'}
                onChange={this.handleOption} />Male
            <div className="homepage-signup-buttons">
              <input className="signup-submit-button" type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
        <button className="demo-login-button" onClick={this.props.loginDemo}>Demo Login</button>
      </div>
    );
  }
}

export default withRouter(SignupForm);

//
// renderErrors() {
//   return(
//     <ul className="signup-errors">
//       {this.props.errors.map((error, i) => (
//         <li key={`error-${i}`}>
//           {error}
//         </li>
//       ))}
//     </ul>
//   );
// }
