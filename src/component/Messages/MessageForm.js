import React, { Component } from "react";
import { Button, Input, Segment } from "semantic-ui-react";

import firebase from "../../firebase";
import Filemodal from "./Filemodel";
import Progressbar from "./Progressbar";

class MessageForm extends Component {
  /**constructor method for state Object */

  constructor(props) {
    super(props);
    this.state = {
      storageRef: firebase.storage().ref(),
      message: "",
      loading: true,
      errors: [],
      model: false,
      uploadState: "",
      percentUpload: 0,
      uploadTask: null
    };
  }

  /**Model Functions */

  openModel = () => this.setState({ model: true });
  closeModel = () => this.setState({ model: false });

  /** Change Handler For get Input Value */

  onChangeHandle = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**Create Message Functions */

  createMessage = (fileURL = null) => {
    const { user } = this.props;
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: user.uid,
        name: user.displayName,
        avatar: user.photoURL
      }
    };

    if (fileURL !== null) {
      message["image"] = fileURL;
    } else {
      message["content"] = this.state.message;
    }
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

  /**File Upload Function  */

  fileUpload = (file, metaData) => {
    const pathTo = this.props.channel.id;
    const ref = this.props.messageRef;
    const filePath = `chat/public/${new Date().toISOString()}.jpg`;

    this.setState(
      {
        uploadState: "uploading",
        uploadTask: this.state.storageRef.child(filePath).put(file, metaData)
      },
      () => {
        this.state.uploadTask.on(
          "state_changed",
          snap => {
            let percentUpload = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            this.setState({
              percentUpload
            });
          },
          err => {
            console.log(err);
            this.setState({
              errors: this.state.errors.concat(err),
              uploadTask: null,
              uploadState: "errors"
            });
          },
          () => {
            this.state.uploadTask.snapshot.ref
              .getDownloadURL()
              .then(downloadURL => {
                this.sendFileMessage(downloadURL, ref, pathTo);
              })
              .catch(err => {
                console.log(err);
                this.setState({
                  errors: this.state.errors.concat(err),
                  uploadTask: null,
                  uploadState: "errors"
                });
              });
          }
        );
      }
    );
  };

  /** sendFileMessage function for send image in message */

  sendFileMessage = (downloadURL, ref, pathTo) => {
    ref
      .child(pathTo)
      .push()
      .set(this.createMessage(downloadURL))
      .then(() => {
        this.setState({ uploadState: "done" });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errors: this.state.errors.concat(err)
        });
      });
  };

  /**Render JSX */

  render() {
    const { errors, model, uploadState, percentUpload } = this.state;
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
            onClick={this.openModel}
          />
        </Button.Group>
        <Filemodal
          model={model}
          fileUpload={this.fileUpload}
          closeModel={this.closeModel}
        />       
        <Progressbar uploadState={uploadState} percentage={percentUpload} />
      </Segment>
    );
  }
}

export default MessageForm;
