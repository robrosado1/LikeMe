import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snippet: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      this.setState({
        snippet: e.target.value
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    
    this.props.submitSearch(this.state.snippet);
    this.props.history.push("/users/search")
  }

  render() {

    return (
      <div className="navbar">
        <div className="navbar-group">
          <div className="navbar-search">
            <Link to={`/users/${this.props.currentUser.id}/newsfeed`}>Lm</Link>
            <form className="search-form" onSubmit={this.handleSubmit}>
              <div className="search-elements">
                <input onChange={this.update()} type="text" placeholder="Search"></input>
                <button className="search-button" type="submit" onClick={this.handleSubmit}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
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

export default withRouter(Navbar);
