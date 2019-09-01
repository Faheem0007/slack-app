import React, { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessageHeader extends Component {
  render() {
    return (
      <Segment clearing>
        {/* Hearder */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            Channel
            <Icon name="star outline" color="black" />
          </span>
          <Header.Subheader>2 USER</Header.Subheader>
        </Header>

        {/* Search Input */}
        <Header floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Message..."
          />
        </Header>
      </Segment>
    );
  }
}

export default React.memo(MessageHeader);
