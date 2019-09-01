import React, { Component } from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { setCurrentChannel } from "./../../actions";

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
      activeChannel: "",
      firstLoad: true,
      channelRef: firebase.database().ref("channels")
    };

    
  }

  /**LifeCycle Methods */

  componentWillUnmount() {
    this.removeListner();
  }

  removeListner = () => {
    this.state.channelRef.off();
  };

  /** model Functions */
  closeModal = () => this.setState({ modal: false });
  openModal = () => this.setState({ modal: true });

  /** Change Handle Function */
  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /** Submit Handle Function */

  onSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };
  componentDidMount() {
    this.addListeners();
  }

  /** Function For Loaded Data from firebase */

  addListeners = () => {
    let loadedChannels = [];
    this.state.channelRef.on(
      "child_added",
      snap => {
        loadedChannels.push(snap.val());
        this.setState({ Channels: loadedChannels }, this.setFristChannel());
      },
      err => {
        console.log(err);
      }
    );
  };

  /** Function For add Data in firebase */

  isFormValid = ({ channelName, channelDetails }) =>
    channelName && channelDetails;

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

  /** Function For select default Channel */

  setFristChannel = () => {
    let firstChannel = this.state.Channels[0];
    if (this.state.Channels.length > 0) {
      this.props.setCurrentChannel(firstChannel);
      this.setActiveChannel(firstChannel);
    }
  };

  /** Function For ADD active class Channel */

  setActiveChannel = channel => {
    this.setState({
      activeChannel: channel.id
    });
  };

  /** Function For Display Channel */

  displayChannels = ({ Channels }) => {
    return (
      Channels.length > 0 &&
      Channels.map(channel => (
        <Menu.Item
          key={channel.id}
          onClick={() => this.changeChannel(channel)}
          name={channel.name}
          style={{ opacity: 0.7 }}
          active={this.state.activeChannel === channel.id}
        >
          #{channel.name}
        </Menu.Item>
      ))
    );
  };

  /**Change Channel */
  changeChannel = channel => {
    this.setActiveChannel(channel);
    this.props.setCurrentChannel(channel);
  };

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

export default connect(
  null,
  { setCurrentChannel }
)(Channels);
