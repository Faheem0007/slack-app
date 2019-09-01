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
      channel: null
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

  /**Addlistener function */

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  /** addMessageListener function */

  addMessageListener = channelId => {
    let messageLoaded = [];
    this.state.messageRef.child(channelId).on("child_added", snap => {
      messageLoaded.push(snap.val());
      console.log(messageLoaded);
      this.setState({
        messages: messageLoaded,
        messageLoading: false
      });
    });
  };

  /** displayMessages function for display message */

  displayMessages = messages => {
    return (
      messages.length > 0 &&
      messages.map((message, i) => (
        <Message key={i}message={message} user={this.state.user} />
      ))
    );
  };

  render() {
    const { messageRef, user, messages } = this.state;

    return (
      <React.Fragment>
        <MessageHeader />
        <Segment>
          <Comment.Group className="messages">
            {messages.length > 0 && this.displayMessages(messages)}
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
