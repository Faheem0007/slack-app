import React, { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessageHeader extends Component {
  render() {
    const { channelName, newuniqueUser, onChangeHandle } = this.props;
    return (
      <Segment clearing>
        {/* Hearder */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            <Icon name="star outline" color="black" />
          </span>
          <Header.Subheader>{newuniqueUser}</Header.Subheader>
        </Header>

        {/* Search Input */}
        <Header floated="right">
          <Input
            size="mini"
            onChange={onChangeHandle}
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
