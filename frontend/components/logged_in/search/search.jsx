import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../../actions/user_actions';
import FriendButton from '../friend_status/friend_button';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.currentUserId = this.props.currentUserId;
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="search-page">
        <div className="filters">
          <span className="filter-results">Filter Results</span>
        </div>
        <div className="search-box">
          <div className="search-header">
            <span className="people-text">People</span>
          </div>
          <ul className="list-of-people">
            {this.props.matches.map(user => {
              return (
                <li className="person" key={`link-${user.id}`}>
                  <div className="search-links">
                    <Link to={`/users/${user.id}/wall`}>
                      <img className="search-list-pic" src={user.profile_pic_url} />
                    </Link>
                    <Link className="person-name" to={`/users/${user.id}/wall`}>
                      {user.fname} {user.lname}
                    </Link>
                  </div>
                  <FriendButton otherUser={user}/>
                </li>
              )})}
          </ul>
        </div>
        <div className="languages">
          <span className="languages-header">Languages</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { users }, session, ui}, ownProps) => {

  const currentUser = users[session.id];
  const regexp = new RegExp(ui.search, 'gi');
  const matches = [];
  Object.values(users).forEach(user => {
    if (user.id === currentUser.id) {
      return;
    }
    if (user.fname.match(regexp) !== null) {
      matches.push(user);
    }
  });
  return ({
    users,
    matches,
    currentUserId: currentUser.id,
    friend_ids: currentUser.friend_ids,
    pending: currentUser.pending
  });
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
