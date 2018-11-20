import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="navbar">
        <div className="navbar-group">
          <div className="navbar-search">
            <Link to={`/users/${this.props.currentUser.id}/newsfeed`}>Lm</Link>
            <form className="search-form">
              <input type="search" placeholder="Search"></input>
              <button></button>
            </form>
          </div>
          <div className="navbar-navigation">
            <div className="navbar-links">
              <Link to={`/users/${this.props.currentUser.id}/wall`}>{this.props.currentUser.fname}</Link>
              <Link to={`/users/${this.props.currentUser.id}/newsfeed`}>Home</Link>
              <Link to={`/search/`}>Find Friends</Link>
            </div>
            <div className="navbar-buttons">
              <Link to={`/users/${this.props.currentUser.id}/friend-list`}><i className="fas fa-user-friends"></i></Link>
              <button value="Messages"><i className="fab fa-facebook-messenger"></i></button>
              <button value="Notifications"><i className="fas fa-bell"></i></button>
              <button value="Quick Help"><i className="fas fa-question-circle"></i></button>
              <button onClick={this.props.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
