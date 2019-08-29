import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Channels: []
    };
  }
  render() {
    const { Channels } = this.state;
    return (
      <Menu.Menu>
        <Menu.Item>
          <span>
            <Icon name="exchange" />
          </span>
          ({Channels.length}) <Icon name="add" />
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

export default Channels;
