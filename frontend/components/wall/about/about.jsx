import React from 'react';

class AboutBox extends React.Component {
  constructor(props) {
    super(props);
    this.pageOwner = this.props.pageOwner;
    debugger
  }

  render() {
    if (this.props.path.slice(-5) !== "about") {
      return "";
    }
    return (
      <div className="about-section">
        <span>About</span>
        <div className="about-contact-info">
          <span>CONTACT INFORMATION</span>
          <ul>
            <li>
              <label>Address</label>
              <span>Address goes here</span>
            </li>
            <li>
              <label>Email</label>
              <span>{this.pageOwner.email}</span>
            </li>
          </ul>
        </div>
        <div className="about-basic-info">
          <span>BASIC INFORMATION</span>
          <ul>
            <li>
              <label>Birth Date</label>
              <span>{this.pageOwner.birthmonth} and {this.pageOwner.birthday}</span>
            </li>
            <li>
              <label>Birth Year</label>
              <span>{this.pageOwner.birthyear}</span>
            </li>
            <li>
              <label>Gender</label>
              <span>{this.pageOwner.gender}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutBox;
