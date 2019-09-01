import React, { Component } from "react";
import { Button, Input, Segment } from "semantic-ui-react";

import firebase from "../../firebase";

class MessageForm extends Component {
  /**constructor method for state Object */

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      loading: true,
      errors: []
    };
  }

  /** Change Handler For get Input Value */

  onChangeHandle = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**Create Message Functions */

  createMessage = () => {
    const { user } = this.props;
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      content: this.state.message,
      user: {
        id: user.uid,
        name: user.displayName,
        avatar: user.photoURL
      }
    };

    return message;
  };

  /** SendMessage Function */

  sendMessage = () => {
    const { messageRef, channel } = this.props;
    const { message } = this.state;

    if (message) {
      this.setState({ loading: false });
      messageRef
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({
            loading: false,
            errors: [],
            message: ""
          });
        })
        .catch(err => {
          this.setState({
            loading: false,
            errors: this.state.errors.concat(err)
          });
        });
    } else {
      this.setState({
        errors: this.state.errors.concat({ message: "Please Add Message" })
      });
    }
  };

  /**Render JSX */

  render() {
    const { errors } = this.state;
    return (
      <Segment className="message__form">
        <Input
          label={<Button icon="add" />}
          name="message"
          onChange={this.onChangeHandle}
          labelPosition="left"
          value={this.state.message}
          placeholder={
            errors.length > 0 ? errors[0].message : "write your message"
          }
          fluid
          className={
            errors.some(error =>
              error.message.toLowerCase().includes("message")
            )
              ? "error"
              : ""
          }
          style={{ marginBottom: ".7em" }}
        />
        <Button.Group icon widths="2">
          <Button
            color="orange"
            content="Add Reply"
            icon="edit"
            onClick={this.sendMessage}
            labelPosition="left"
          />
          <Button
            color="teal"
            content="Media Upload"
            icon="cloud upload"
            labelPosition="right"
          />
        </Button.Group>
      </Segment>
    );
  }
}

export default React.memo(MessageForm);
