import React, { Component } from "react";
import { Segment, Comment } from "semantic-ui-react";

import firebase from "../../firebase";
import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";

class Messages extends Component {
  /**constructor method for state object */

  constructor(props) {
    super(props);
    this.state = {
      messageRef: firebase.database().ref("messages"),
      user: this.props.user.userReducer.user,
      messages: [],
      messageLoading: true,
      channel: null,
      newuniqueUser: "",
      searchTerm: "",
      searchMessageAndUser: []
    };
  }

  /**lifeCycle Methods */

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.state.user && this.props.channel) {
        this.addListeners(this.props.channel.id);
      }
    }
  }

  /**geting input value */

  onChangeHandle = e => {
    this.setState(
      {
        searchTerm: e.target.value
      },
      () => this.searchMessagewithUser()
    );
  };

  /**Addlistener function */

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  /** addMessageListener function */

  addMessageListener = channelId => {
    let messageLoaded = [];
    this.state.messageRef.child(channelId).on("child_added", snap => {
      messageLoaded.push(snap.val());
      this.setState({
        messages: messageLoaded,
        messageLoading: false
      });
      this.countUniqueUser(messageLoaded);
    });
  };

  /**function for unique User */

  countUniqueUser = message => {
    const uniqueUser = message.reduce((accu, message) => {
      if (!accu.includes(message.user.name)) {
        accu.push(message.user.name);
      }
      return accu;
    }, []);
    const newuniqueUser = `${uniqueUser.length} user${
      uniqueUser.length > 1 ? "s" : ""
    }`;
    this.setState({
      newuniqueUser
    });
  };

  /**Serach message and specific user message */

  searchMessagewithUser = () => {
    const SerachMessage = [...this.state.messages];
    const regix = new RegExp(this.state.searchTerm, "gi");
    const searchMessageAndUser = SerachMessage.reduce((accu, message) => {
      if (
        (message.content && message.content.match(regix)) ||
        message.user.name.match(regix)
      ) {
        accu.push(message);
      }
      return accu;
    }, []);
    this.setState({
      searchMessageAndUser
    });
  };

  /**function for display channel name */

  displayChannelName = channel => (channel ? `#${channel.name}` : "");

  /** displayMessages function for display message */

  displayMessages = messages => {
    return (
      messages.length > 0 &&
      messages.map((message, i) => (
        <Message key={i} message={message} user={this.state.user} />
      ))
    );
  };

  render() {
    const {
      messageRef,
      user,
      messages,
      searchMessageAndUser,
      newuniqueUser,
      searchTerm
    } = this.state;

    return (
      <React.Fragment>
        <MessageHeader
          channelName={this.displayChannelName(this.props.channel)}
          newuniqueUser={newuniqueUser}
          onChangeHandle={this.onChangeHandle}
        />
        <Segment>
          <Comment.Group className="messages">
            {searchTerm
              ? this.displayMessages(searchMessageAndUser)
              : this.displayMessages(messages)
              }
          </Comment.Group>
        </Segment>

        <MessageForm
          messageRef={messageRef}
          user={user}
          channel={this.props.channel}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
