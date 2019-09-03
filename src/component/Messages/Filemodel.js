import React, { Component } from "react";
import mime from "mime-types";
import { Modal, Input, Button, Icon } from "semantic-ui-react";

class Filemodal extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"]
  };

  /** function for select file */

  onChangeFileHandle = event => {
    const file = event.target.files[0];
    this.setState({ file });
  };

  /**SendFile Function */

  sendFile = () => {
    const { file } = this.state;
    const { fileUpload, closeModel } = this.props;

    if (file !== null) {
      if (this.isAuthorized(file.name)) {
        const metaData = { contentType: mime.lookup(file.name) };
        fileUpload(file, metaData);
        closeModel();
      }
    }
  };

  /**Function for file type check */

  isAuthorized = filename =>
    this.state.authorized.includes(mime.lookup(filename));

  /** function for check message is image or contents */

  /**render JSX */

  render() {
    const { model, closeModel } = this.props;
    return (
      <Modal basic open={model} onClose={closeModel}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <Input
            type="file"
            fluid
            name="file"
            onChange={this.onChangeFileHandle}
            label="file type jpg,png"
            labelPosition="right"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button icon color="orange" onClick={this.sendFile} inverted>
            <Icon name="checkmark" />
            Send
          </Button>
          <Button icon color="red" inverted onClick={closeModel}>
            <Icon name="remove" />
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Filemodal;
