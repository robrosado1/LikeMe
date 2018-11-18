import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props
  }

  render() {
    return (
      <div className="about-section">
        <div className="about-contact-info">
          <span>CONTACT INFORMATION</span>

        </div>
        <div className="about-basic-info">
          <span>BASIC INFORMATION</span>

        </div>

      </div>
    )
  }
}
