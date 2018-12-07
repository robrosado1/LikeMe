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
    this.determineFriendStatus = this.determineFriendStatus.bind(this);
    this.currentUser = this.props.currentUser;
    this.otherUser = this.props.otherUser;
    this.state = {
      button: "Add Friend"
    };
  }


  handleFriending(e) {
    e.preventDefault();

    if (e.currentTarget.innerHTML === "Add Friend") {
      this.props.sendFriendRequest({
        user1_id: this.currentUser.id,
        user2_id: this.otherUser.id
      })
    } else if (e.currentTarget.innerHTML === "Accept Friend Request") {
      this.props.acceptFriendRequest({
        user1_id: this.otherUser.id,
        user2_id: this.currentUser.id,
        pending: false
      })
    } else {
      debugger
      // this.props.deleteFriend({
      // });
    }
    // debugger
    this.determineFriendStatus(this.currentUser, this.otherUser);
    debugger
  }

  determineFriendStatus(currUser, otherUser) {
    if (currUser.friend_ids.includes(otherUser.id)) {
      this.setState((state, props) => ({
        button: "Friends"
      }));
    } else if (currUser.sent.includes(otherUser.id)) {
      this.setState((state, props) => ({
        button: "Friend Request Sent"
      }));
    } else if (currUser.received.includes(otherUser.id)) {
      this.setState((state, props) => ({
        button: "Accept Friend Request"
      }));
    } else {
      this.setState((state, props) => ({
        button: "Add Friend"
      }));
    }
  }

  componentDidMount() {
    this.determineFriendStatus(this.currentUser, this.otherUser);

    const buttons = Array.from(document.getElementsByClassName("friend-button"));
    buttons.forEach( button => {
      if (button.innerHTML === "Accept Friend Request") {
        button.classList.add("accept");
      }
    });
  }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   const otherUser = this.props.otherUser;
  //   debugger
  //   if (nextProps.currentUser.friend_ids.length !== this.props.currentUser.friend_ids.length) {
  //     debugger
  //     return true;
  //   } else if (nextProps.currentUser.sent.length !== this.props.currentUser.sent.length) {
  //     debugger
  //     return true;
  //   } else if (nextProps.currentUser.received.length !== this.props.currentUser.received.length) {
  //     debugger
  //     return true;
  //   } else {
  //     debugger
  //     return false;
  //   }
  // }
  //
  // componentDidUpdate(prevProps) {
  //   if (prevProps.currentUser) {
  //
  //   }
  // }

  render() {
    if (this.currentUser.id === this.otherUser.id) {
      return "";
    }
    const currUser = this.currentUser;
    const otherUser = this.otherUser;
    return (
      <button id={`fb-${this.otherUser.id}`} type="button" className="friend-button"
        onClick={this.handleFriending}>
        {this.state.button}
      </button>
    );
  }
}

const mapStateToProps = ({entities: { users }, session}) => {
  return ({
    users,
    currentUser: users[session.id]
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
