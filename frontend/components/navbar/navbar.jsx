import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar-group">
          <div className="navbar-search">
            <Link to={`/users/${this.props.currentUser.id}/newfeed`}>Logo</Link>
            <input type="search" placeholder="Search"></input>
          </div>
          <div className="navbar-navigation">
            <div className="navbar-links">
              <Link to={`/users/${this.props.currentUser.id}/wall`}>{this.props.currentUser.fname}</Link>
              <Link to={`/users/${this.props.currentUser.id}/newsfeed`}>Home</Link>
              <Link to={`/users/`}>Find Friends</Link>
            </div>
            <div className="navbar-buttons">
              <Link to={`/users/${this.props.currentUser.id}/friend-list`}>Friends List</Link>
              <button value="Messages">Messages</button>
              <button value="Notifications">Notifications</button>
              <button value="Quick Help">Quick Help</button>
              <button onClick={this.props.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
