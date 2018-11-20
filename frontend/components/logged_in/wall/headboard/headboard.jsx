import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../../../actions/user_actions';

class Headboard extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.pageOwnerId = Number(this.props.location.pathname.split("/")[2]);
    debugger
  }

  componentDidMount() {
    this.props.fetchUser(this.pageOwnerId);
  }

  render() {
    if (Boolean(this.props.location.pathname.match(/newsfeed$/))) {
      return "";
    }
    debugger
    if (this.props.users[this.pageOwnerId] === undefined) {
      return "";
    }
    const pageOwner = this.props.users[this.pageOwnerId];
    return (
      <div className="headboard">
        <div className="cover-photo">
          <h3 className="headboard-name">
            <Link to={`/users/${pageOwner.id}/wall`}>
              {`${pageOwner.fname} ${pageOwner.lname}`}
            </Link>
          </h3>
        </div>
        <div className="headboard-navigation">
          <ul className="headboard-links">
            <Link className="headboard-nav" to={`/users/${pageOwner.id}/wall`}>Timeline</Link>
            <Link className="headboard-nav" to={`/users/${pageOwner.id}/about`}>About</Link>
            <Link className="headboard-nav" to={`/users/${pageOwner.id}/friend-list`}>Friends</Link>
            <Link className="headboard-nav" to={`/users/${pageOwner.id}/photos`}>Photos</Link>
            <Link className="headboard-nav" to={`/users/${pageOwner.id}/stories`}>Archive</Link>
            <button className="headboard-nav">More</button>
          </ul>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Headboard);
