import React from 'react';
import { Link } from 'react-router-dom'

class LoginpageForm extends React.Component {
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

  // renderErrors() {
  //   return(
  //     <ul className="login-errors">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let highlight = false;
    if (this.props.errors.length > 0) {
      highlight = true;
    }
    return (
      <div className="loginpage-box">
        <h4 className="loginpage-title">Log in to Likeme</h4>
        <form className="loginpage-form" onSubmit={this.handleSubmit}>
          <input className={`loginpage-input ${highlight ? 'unfilled' : ''}`}
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
