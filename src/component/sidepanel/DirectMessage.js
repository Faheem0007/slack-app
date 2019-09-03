import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

import firebase from "../../firebase";

class DirectMessage extends Component {
  state = {
    users: [],
    user: this.props.user.userReducer.user,
    userRef: firebase.database().ref("user"),
    connectRef: firebase.database().ref(".info/connected"),
    prefrenceRef: firebase.database().ref("prefrence")
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  /** */

  addListeners = userId => {
    let loadedUser = [];
    this.state.userRef.on("child_added", snap => {
      if (userId !== snap.key) {
        let user = snap.val();
        user["uid"] = snap.key;
        user["status"] = "offline";
        loadedUser.push(user);
        this.setState({
          users: loadedUser
        });
      }
    });

    this.state.connectRef.on("value", snap => {
      if (snap.key === true) {
        let ref = this.state.connectRef.child(userId);
        ref.set(true);
        ref.onDisconnect().remove(err => {
          if (err !== null) {
            console.log(err);
          }
        });
      }
    });

    this.state.prefrenceRef.on("child_added", snap => {
      if (userId !== snap.key) {
        this.addStatusToUser(snap.key);
      }
    });

    this.state.prefrenceRef.on("child_removed", snap => {
      if (userId !== snap.key) {
        this.addStatusToUser(snap.key, false);
      }
    });
  };

  addStatusToUser = (userid, connect = true) => {
    const updateUser = this.state.user.reduce((acc, user) => {
      if (user.uid === userid) {
        user["status"] = `${connect ? "online" : "offline"}`;
      }
      return acc.concat(user);
    }, []);

    this.setState({
      users: updateUser
    });
  };

  render() {
    const { users } = this.state;
    console.log(this.state.users);

    return (
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="mail" />
            DirectMessage
          </span>
          {"  "}({users.length})
        </Menu.Item>
        {users.map(user => (
          <Menu.Item key={user.uid} onClick={() => console.log(user)}>
            <span>
              <Icon
                name="circle"
                size="small"
                color={user.status === "online" ? "green" : "red"}
              />
              @{user.name}
            </span>
          </Menu.Item>
        ))}
      </Menu.Menu>
    );
  }
}
export default DirectMessage;
