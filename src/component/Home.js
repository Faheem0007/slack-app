import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Metapanel from "./metapanel/metapenal";
import Colorpanel from "./colorpanel/colorpanel";
import Message from "./Messages/Message";
import Sidepanel from "./sidepanel/sidepanel";

class Home extends Component {
  render() {
    return (
      <Grid columns="equal" className="app">
        <Colorpanel />
        <Sidepanel {...this.props} />
        <Grid.Column style={{ marginLeft: 320, backgroundColor: "red" }}>
          <Message />
        </Grid.Column>
        <Grid.Column width={4}>
          <Metapanel />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
