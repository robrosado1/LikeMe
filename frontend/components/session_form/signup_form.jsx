import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { monthOptions, dayOptions, yearOptions, months } from '../../util/constants.jsx';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        birthday: '',
        birthmonth: '',
        birthyear: '',
        gender: ''
      },
      errors: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        birthday: '',
        birthmonth: '',
        birthyear: '',
        gender: ''
      }
    };
    this.fields = Object.keys(this.state.form);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  update(field) {
    let toBeChanged = Object.assign({}, this.state.form);
    return e => {
      toBeChanged[field] = e.target.value;
      return this.setState({
        form: toBeChanged
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let shouldSubmit = true;
    let newState = {};
    const cb = function(field) {
      if (this.state.form[field].length === 0) {
        shouldSubmit = false;
        newState[field] = 'unfilled';
      } else {
        newState[field] = '';
      };
    }.bind(this);

    this.fields.forEach(cb);
    this.setState({
      errors: newState
    });

    if (shouldSubmit) {
      const user = Object.assign({}, this.state.form);
      
      this.props.signup(user);
    }
  }

  handleOption(e) {
    const newGender = Object.assign({}, this.state.form);
    newGender.gender = e.target.value;
    this.setState({
      form: newGender,
      errors: newGender
    });
  };

  render() {
    const title = this.props.match.path === '/signup' ? 'Create a New Account' : 'Sign Up';
    return (
      <div className="signup-form-container">
        <h2 className="signup-headline">{title}</h2>
        <h4 className="signup-subheadline">It's free and always will be.</h4>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
            <br/>
              <div className="signup-form-name-section">
                <input type="text"
                  value={this.state.form.fname}
                  onChange={this.update('fname')}
                  className={`signup-name-input ${this.state.errors.fname}`}
                  placeholder="First name"
                />
                <input type="text"
                  value={this.state.form.lname}
                  onChange={this.update('lname')}
                  className={`signup-name-input ${this.state.errors.lname}`}
                  placeholder="Last name"
                />
              </div>
              <br/>
            <div className="signup-form-email-section">
              <input type="text"
                value={this.state.form.email}
                onChange={this.update('email')}
                className={`signup-input ${this.state.errors.email}`}
                placeholder="Email"
              />
            </div>
            <br/>
            <div className="signup-form-password-section">
              <input type="password"
                value={this.state.form.password}
                onChange={this.update('password')}
                className={`signup-input ${this.state.errors['password']}`}
                placeholder="New password"
              />
            </div>
            <br/>
            <div className="signup-form-birthdate-section">
              <h4 className="homepage-birthdate-header">Birthday</h4>
              <select id="month" onChange={this.update('birthmonth')}>
                <option value="month" disabled>Month</option>
                {monthOptions}
              </select>
              <select id="day" onChange={this.update('birthday')}>
                <option value="day" disabled>Day</option>
                {dayOptions}
              </select>
              <select id="year" onChange={this.update('birthyear')}>
                <option value="year" disabled>Year</option>
                {yearOptions}
              </select>
            </div>
            <br/>
            <ul className="radio-buttons">
              <li className={`fem-button-group ${this.state.errors['gender']}`}>
                <input type="radio" value="Female"
                checked={this.state.form.gender === 'Female'}
                onChange={this.handleOption} className="radio-button-fem"/>Female</li>
              <li className={`male-button-group ${this.state.errors['gender']}`}>
                <input type="radio" value="Male"
                checked={this.state.form.gender === 'Male'}
                onChange={this.handleOption} className="radio-button-male"/>Male</li>
            </ul>
            <p>
              By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
            </p>
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

//
// if (this.props.errors.length > 0 && this.props.errors[0] !== 'Invalid login credentials') {
//
//   return (
//     <Redirect to="/signup" />
//   );
//
// }
