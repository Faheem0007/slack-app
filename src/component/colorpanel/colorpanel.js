import React from "react";
import { Divider, Menu, Sidebar, Button } from "semantic-ui-react";

class Colorpanel extends React.Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        <Divider />

        <Button icon="add" size="small" color="blue" />
      </Sidebar>
    );
  }
}

export default Colorpanel;
