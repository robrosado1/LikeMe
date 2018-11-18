import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-section">
        <span>About</span>
        <div className="about-contact-info">
          <span>CONTACT INFORMATION</span>
          <ul>
            <li>
              <label>Address</label>
              <span>{this.props}</span>
            </li>
          </ul>
        </div>
        <div className="about-basic-info">
          <span>BASIC INFORMATION</span>

        </div>

      </div>
    )
  }
}

export default About;
