import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../../../actions/user_actions';

class Headboard extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.pageOwnerId = Number(this.props.history.location.pathname.split("/")[2]);
  }

  componentDidMount() {
    this.props.fetchUser(this.pageOwnerId);
  }

  render() {
    if (Boolean(this.props.history.location.pathname.match(/newsfeed$/))) {
      return "";
    }
    if (this.props.users[this.pageOwnerId] === undefined) {
      return "";
    }
    const pageOwner = this.props.users[this.pageOwnerId];
    return (
      <div className="headboard">
        <div className="cover-photo">
          <div className="headboard-pic-border">
            <img className="headboard-pic" src={pageOwner.profile_pic_url} />
          </div>
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


// <span className="headboard-nav">More</span>
