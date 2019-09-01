import React from "react";
import moment from "moment";
import { Comment } from "semantic-ui-react";

const isOwnMessage = (user, message) => {
  return user.uid === message.user.id ? "self__message" : "";
};

const timeFrom = message => moment(message.timestamp).fromNow();

const Message = ({ message, user }) => {
  return (
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content className={isOwnMessage(user, message)}>
        <Comment.Author as="a">{message.user.name}</Comment.Author>
        <Comment.Metadata>{timeFrom(message)}</Comment.Metadata>
        <Comment.Text>{message.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
