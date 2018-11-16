import React from 'react';

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

  renderErrors() {
    return(
      <ul className="login-errors">
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
      <div>
        <h4 className="loginpage-title">Log in to Likeme</h4>
        <form className="loginpage-form" onSubmit={handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.update('email')} />
          <input type="text" value={this.state.password} onChange={this.update('password')} />
        </form>
      </div>
    )
  }
}

//
// componentWillUnmount() {
//   this.props.clearErrors();
// }
