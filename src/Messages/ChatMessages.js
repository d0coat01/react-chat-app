import React, { Component } from 'react';
class ChatMessages extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  }
  render() {
    const current_user = this.props.current_user;
    const messages = this.props.messages.map((message, id) => {
      const isCurrentUser = message.name === current_user ? "chat__current-user-message" : "";
      return (
        <li key={id} className={isCurrentUser}>
          <div className="chat__sender">{message.name}</div>
          <div className="chat__message-text">{message.message}</div>
        </li>
      )
    });
    return (
      <ul className="chat__messages">
       {messages}
       <div ref={(el) => {this.messagesEnd = el;}}></div>
      </ul>
    )
  }
}

export default ChatMessages;
