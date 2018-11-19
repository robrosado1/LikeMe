import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Headboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.path.slice(-8) === "newsfeed") {
      return "";
    }
    return (
      <div className="headboard">
        <div className="cover-photo">
          <span className="headboard-name">
            {this.props.currentUser.fname} {this.props.currentUser.lname}
          </span>
        </div>
        <div className="headboard-navigation">
          <ul className="headboard-links">
            <li><Link to={`/users/${this.props.currentUser.id}/wall`}>Timeline</Link></li>
            <li><Link to={`/users/${this.props.currentUser.id}/about`} disabled={this.props.path.slice(-5) === "about"}>About</Link></li>
            <li><Link to={`/users/${this.props.currentUser.id}/friend-list`}>Friends</Link></li>
            <li><Link to={`/users/${this.props.currentUser.id}/photos`}>Photos</Link></li>
            <li><Link to={`/users/${this.props.currentUser.id}/stories`}>Archive</Link></li>
            <li><button>More</button></li>
          </ul>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

export default connect(mapStateToProps)(Headboard);
