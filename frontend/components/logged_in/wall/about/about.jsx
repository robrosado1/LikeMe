import React from 'react';
import { Link } from 'react-router-dom';
import { monthOptions, dayOptions, yearOptions } from '../../../../util/constants';

class AboutBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.pageOwner = this.props.pageOwner;
    this.state = {info: this.props.pageOwner};
    this.isPageOwner = (this.props.currentUser.id === this.pageOwner.id);
  }

  componentDidMount() {
  }

  render() {
    if (!this.props.location.pathname.match(/about$/)) {
      return "";
    }
    return (
      <div className="about-box">
        <div className="about-header">
          <i className="fas fa-user"></i>
          <Link to={`/users/${this.pageOwner.id}/about`}><h3>About</h3></Link>
        </div>
        <div className="about-section">
          <div className="about-legend">
            <ul className="legend-list">
              <li className="list-option">Contact and Basic Info</li>
            </ul>
          </div>
          <div className="about-info">
            <div className="about-contact-info">
              <h4>CONTACT INFORMATION</h4>
              <ul>
                <li>
                  <label>Address</label>
                  <span>Address goes here</span>
                </li>
                <li>
                  <label>Email</label>
                  <span
                    className={`info-display ${this.isPageOwner ? 'owned' : ''}`}>
                    {this.pageOwner.email}
                  </span>
                </li>
              </ul>
            </div>
            <div className="about-basic-info">
              <h4>BASIC INFORMATION</h4>
              <ul>
                <li>
                  <label>Birth Date</label>
                  <span className="info-display" >
                    {this.pageOwner.birthmonth} and {this.pageOwner.birthday}
                  </span>
                </li>
                <li>
                  <label>Birth Year</label>
                  <span className="">
                    {this.pageOwner.birthyear}
                  </span>
                </li>
                <li>
                  <label>Gender</label>
                  <span className="">
                    {this.pageOwner.gender}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutBox;
