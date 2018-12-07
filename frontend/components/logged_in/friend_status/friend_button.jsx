import React from 'react';
import { connect } from 'react-redux';
import {
  sendFriendRequest,
  acceptFriendRequest,
  deleteFriend
} from '../../../actions/user_actions';


class FriendButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriending = this.handleFriending.bind(this);
    // this.determineFriendStatus = this.determineFriendStatus.bind(this);
    this.otherUser = this.props.otherUser;
  }


  handleFriending(e) {
    e.preventDefault();

    if (e.currentTarget.innerHTML === "Add Friend") {
      this.props.sendFriendRequest({
        user1_id: this.props.currentUser.id,
        user2_id: this.otherUser.id
      });
    } else if (e.currentTarget.innerHTML === "Accept Friend Request") {
      e.currentTarget.classList.remove("accept");
      this.props.acceptFriendRequest({
        user1_id: this.otherUser.id,
        user2_id: this.props.currentUser.id,
        pending: false
      });
    } else {
    }
    // this.determineFriendStatus(this.props.currentUser, this.otherUser);
    //
    // this.setState({
    //   state: this.state
    // });
  }

  componentDidMount() {
    const button = document.getElementById(`fb-${this.props.otherUser.id}`)
    if (button.innerHTML === "Accept Friend Request") {
      button.classList.add("accept");
    }
  }

  render() {
    if (this.props.currentUser.id === this.otherUser.id) {
      return "";
    }
    let friendStatus;
    if (this.props.currentUser.friend_ids.includes(this.otherUser.id)) {
      friendStatus = "Friends";
    } else if (this.props.currentUser.sent.includes(this.otherUser.id)) {
      friendStatus = "Friend Request Sent";
    } else if (this.props.currentUser.received.includes(this.otherUser.id)) {
      friendStatus = "Accept Friend Request";
    } else {
      friendStatus = "Add Friend";
    }
    return (
      <button id={`fb-${this.props.otherUser.id}`} type="button" className="friend-button"
        onClick={this.handleFriending}>{`${friendStatus}`}</button>
    );
  }
}

const mapStateToProps = ({entities: { users }, session}) => {
  let currentUser = users[session.id];
  return ({
    users,
    currentUser,
    sent: currentUser.sent,
    received: currentUser.received,
    friends: currentUser.friend_ids
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    sendFriendRequest: requestInfo => dispatch(sendFriendRequest(requestInfo)),
    acceptFriendRequest: request => dispatch(acceptFriendRequest(request)),
    deleteFriend: requestId => dispatch(deleteFriend(requestId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendButton);
