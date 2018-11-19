import React from 'react';
import { monthOptions, dayOptions, yearOptions } from '../../../util/constants';

class AboutBox extends React.Component {
  constructor(props) {
    super(props);
    this.pageOwner = this.props.pageOwner;
    this.state = {info: this.props.pageOwner};
    debugger
    this.isPageOwner = (this.props.currentUser.id === this.pageOwner.id);
  }

  componentDidMount() {
  }

  render() {
    debugger
    if (!this.props.location.pathname.match(/about$/)) {
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
              <span
                className={`info-display ${this.isPageOwner ? 'owned' : ''}`}>
                {this.pageOwner.email}
              </span>
              <div hidden={this.isPageOwner} className="secret">
                <form className="email-edit-form">
                  <input type="email" value={this.state.email} placeholder="Email"/>
                  <input type="submit" value="Save Changes" />
                </form>
                <button value="Cancel" />
              </div>
            </li>
          </ul>
        </div>
        <div className="about-basic-info">
          <span>BASIC INFORMATION</span>
          <ul>
            <li>
              <label>Birth Date</label>
              <span className="info-display" >
                {this.pageOwner.birthmonth} and {this.pageOwner.birthday}
              </span>
              <div hidden={this.isPageOwner} className="secret">
                <form className="email-edit-form">
                  <select value="Day" default={this.state.birthday}>
                    {dayOptions}
                  </select>
                  <select value="Month" default={this.state.birthmonth}>
                    {dayOptions}
                  </select>
                  <input type="submit" value="Save Changes" />
                </form>
                <button value="Cancel" />
              </div>
            </li>
            <li>
              <label>Birth Year</label>
              <span className="">
                {this.pageOwner.birthyear}
              </span>
              <div hidden={this.isPageOwner} className="secret">
                <form className="email-edit-form">
                  <select value="Year" default={this.state.birthyear}>
                    {dayOptions}
                  </select>
                  <input type="submit" value="Save Changes" />
                </form>
                <button value="Cancel" />
              </div>
            </li>
            <li>
              <label>Gender</label>
              <span className="">
                {this.pageOwner.gender}
              </span>
            </li>
            <div hidden={this.isPageOwner} className="secret">
              <form className="email-edit-form">
                <select>
                  <option disabled={true}>Gender</option>
                  <option defaultValue="Female" checked={this.state.gender === "Female"}>Female</option>
                  <option defaultValue="Male" checked={this.state.gender === "Male"}>Male</option>
                  <option defaultValue="Custom" checked={this.state.gender === "Custom"}>Custom</option>
                </select>
                <input type="submit" value="Save Changes" />
              </form>
              <button value="Cancel" />
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutBox;
