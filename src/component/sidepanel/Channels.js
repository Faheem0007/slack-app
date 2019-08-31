import React, { Component } from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";

import firebase from "../../firebase";

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user.userReducer.user,
      Channels: [],
      channelName: "",
      channelDetails: "",
      modal: false,
      channelRef: firebase.database().ref("channels")
    };
  }
  closeModal = () => this.setState({ modal: false });
  openModal = () => this.setState({ modal: true });

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };
  componentDidMount() {
    this.addListeners();
  }

  addListeners = () => {
    let loadedChannels = [];
    this.state.channelRef.on(
      "child_added",
      snap => {
        loadedChannels.push(snap.val());
        this.setState({ Channels: loadedChannels });
      },
      err => {
        console.log(err);
      }
    );
  };
  addChannel = () => {
    const { channelName, channelRef, channelDetails, user } = this.state;

    const key = channelRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    };

    channelRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelDetails: "", channelName: "" });
        this.closeModal();
        console.log("channel added");
      })
      .catch(err => console.error(err));
  };

  displayChannels = ({ Channels }) => {
    return (
      Channels.length > 0 &&
      Channels.map(channel => (
        <Menu.Item
          key={channel.id}
          onClick={() => console.log(channel.name)}
          name={channel.name}
          style={{ opacity: 0.7 }}
        >
          #{channel.name}
        </Menu.Item>
      ))
    );
  };

  isFormValid = ({ channelName, channelDetails }) =>
    channelName && channelDetails;

  render() {
    const { Channels, modal } = this.state;
    return (
      <React.Fragment>
        <Menu.Menu>
          <Menu.Item style={{ cursor: "pointer" }}>
            <span>
              <Icon name="exchange" />
              Channels
            </span>
            ({Channels.length}) <Icon name="add" onClick={this.openModal} />
          </Menu.Item>
          {this.displayChannels(this.state)}
        </Menu.Menu>
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add Channels</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Input
                  fluid
                  onChange={this.onChangeHandle}
                  label="Name of Channel"
                  name="channelName"
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  onChange={this.onChangeHandle}
                  label="About the Channel"
                  name="channelDetails"
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="green"
              inverted
              style={{ cursor: "pointer" }}
              onClick={this.onSubmit}
            >
              <Icon name="checkmark" />
              Add
            </Button>
            <Button
              color="green"
              inverted
              onClick={this.closeModal}
              style={{ cursor: "pointer" }}
            >
              Close
              <Icon name="remove" />
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Channels;
