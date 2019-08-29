import React from "react";
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";

class UserPanel extends React.Component {
  DropdownOptions = () => {
    return [
      {
        key: "user",
        text: (
          <span>
            Sign in as
            <strong>{this.props.user.userReducer.user.displayName}</strong>
          </span>
        ),
        disabled: true
      },
      {
        key: "avatar",
        text: <span>Change Avatar</span>
      },
      {
        key: "signout",
        text: <span onClick={this.props.SignOut}>Sign out</span>
      }
    ];
  };

  render() {
    const { userReducer } = this.props.user;
    return (
      <Grid style={{ backgroundColor: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em" }}>
            <Header as="h2" inverted floated="left">
              <Icon name="code" />
              <Header.Content>EwigChat</Header.Content>
            </Header>
            <Header as="h4" inverted style={{ padding: "0.25em" }}>
              <Dropdown
                trigger={
                  <span>
                    <Image
                      src={userReducer.user.photoURL}
                      avatar
                      spaced="right"
                    />
                    {userReducer.user.displayName}
                  </span>
                }
                options={this.DropdownOptions()}
              />
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
