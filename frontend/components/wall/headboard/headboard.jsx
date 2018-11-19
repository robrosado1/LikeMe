import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Headboard extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }

  render() {
    if (Boolean(this.props.location.pathname.match(/newsfeed$/))) {
      return "";
    }
    return (
      <div className="headboard">
        <div className="cover-photo">
          <h3 className="headboard-name">
            {this.currentUser.fname} {this.currentUser.lname}
          </h3>
        </div>
        <div className="headboard-navigation">
          <ul className="headboard-links">
            <Link className="headboard-nav" to={`/users/${this.currentUser.id}/wall`}>Timeline</Link>
            <Link className="headboard-nav" to={`/users/${this.currentUser.id}/about`}>About</Link>
            <Link className="headboard-nav" to={`/users/${this.currentUser.id}/friend-list`}>Friends</Link>
            <Link className="headboard-nav" to={`/users/${this.currentUser.id}/photos`}>Photos</Link>
            <Link className="headboard-nav" to={`/users/${this.currentUser.id}/stories`}>Archive</Link>
            <button className="headboard-nav">More</button>
          </ul>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  
  return {
    currentUser: users[session.id]
  };
};

export default connect(mapStateToProps)(Headboard);
