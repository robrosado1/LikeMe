import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../../../actions/user_actions';
import PostListContainer from '../../post_list/post_list_container';

class IntroAndFriends extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.pageOwnerId = Number(this.props.history.location.pathname.split("/")[2]);
    this.fetchUser = this.props.fetchUser.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.url !== nextProps.match.url) {
      this.props.history.push(nextProps.match.url)
    }
  }

  render() {
    const friendList = () => {
      if (this.props.users[this.pageOwnerId] === undefined) {
        this.props.fetchUser(this.pageOwnerId);
      } else {
        this.props.users[this.pageOwnerId].friend_ids.forEach(friendId => {
          if (this.props.users[friendId] === undefined) {
            this.props.fetchUser(friendId);
            return "";
          }
        });
        return this.props.users[this.pageOwnerId].friend_ids.map(friendId => {
          const pageOwner = this.props.users[this.pageOwnerId];
          const friend = this.props.users[friendId];
          return (
            <li key={`${pageOwner.fname}-friendlist-${friend.id}`}
              style={{backgroundImage: "url(" + friend.profile_pic_url + ")"}}>
              <Link to={`/users/${friendId}/wall`}>
                {`${friend.fname} ${friend.lname}`}
              </Link>
            </li>
          );
        });
      }
    }

    return(
      <div className="wall-container">
        <div className="intro-and-friends">
          <div className="intro-box">
            <span><i className="fas fa-globe-americas"></i>Intro</span>
            <div>
              <i className="far fa-comment-alt"></i>
              <p>Add a short bio to tell people more about yourself.</p>
            </div>
          </div>
          <div className="friends-box">
            <div className="fb-header">
              <span><i className="fas fa-user-friends friends-box-icon"></i>
                {`Friends • ${this.props.users[this.pageOwnerId].friend_ids.length}`}
              </span>
            </div>
            <ul className="list-of-friends">
              {friendList()}
            </ul>
          </div>
        </div>
        <PostListContainer />
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroAndFriends);
