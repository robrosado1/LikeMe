import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = (props) => (
  <div className="search-box">
    <div className="search-header">
      <span>People</span>
    </div>
    <ul className="list-of-people">
      {props.matches.map(user => (
        <Link to={`/users/${user.id}/wall`}>
          <span>{user.fname} {user.lname}</span>
        </Link>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ entities: { users }, ui}, ownProps) => {
  debugger
  const regexp = new RegExp(ui.search, 'gi');
  const matches = [];
  Object.values(users).forEach(user => {
    debugger
    if (user.fname.match(regexp) === null) {
      matches.concat([]);
    } else {
      matches.push(user);
    }
  });
  debugger
  return ({
    users,
    matches
  });
};
//
// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps)(SearchResults);
