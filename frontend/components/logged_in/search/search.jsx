import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = (props) => (
  <div className="search-page">
    <div className="filters">
    </div>
    <div className="search-box">
      <div className="search-header">
        <span className="people-text">People</span>
      </div>
      <ul className="list-of-people">
        {props.matches.map(user => (
          <li className="person" key={`link-${user.id}`}>
            <Link to={`/users/${user.id}/wall`}>
              <span className="person-name">{user.fname} {user.lname}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="languages">
    </div>
  </div>
);

const mapStateToProps = ({ entities: { users }, ui}, ownProps) => {
  
  const regexp = new RegExp(ui.search, 'gi');
  const matches = [];
  Object.values(users).forEach(user => {
    
    if (user.fname.match(regexp) === null) {
      matches.concat([]);
    } else {
      matches.push(user);
    }
  });
  
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
