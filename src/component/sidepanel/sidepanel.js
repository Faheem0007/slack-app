import React from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./userpanel";
import Channels from "./Channels";

const Sidepanel = props => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
    >
      <UserPanel {...props} />
      <Channels {...props} />
    </Menu>
  );
};

export default React.memo(Sidepanel);
